const mongooose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/config").get(process.env.NODE_ENV);
const SALT_I = 10

const UserSchema = mongooose.Schema({
    email:{
        type: String,
        required: true,
        trim:true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        minlength: 6
    },
    firstname:{
        type: String,
        maxlength: 20
    },
    lastname:{
        type: String,
        maxlength: 20
    },
    role:{
        type: Number,
        default: 0
    },
    token:{
        type: String
    }
})

// HASHING PASSWORD
UserSchema.pre('save',function(next){
    var user = this;

    if(user.isModified('password')){

        bcrypt.genSalt(SALT_I,function(err,salt){
            if(err) return next(err)
            bcrypt.hash(user.password,salt,function(err,hash){
                if(err) return next(err)
                user.password = hash
                next()
            })
        })

    }
    else{
        next()
    }
})

// Method for comapring password for login
UserSchema.methods.ComparePass = function(currentPassword,cb){

    bcrypt.compare(currentPassword,this.password,(err,isMatch)=>{
        if(err) return cb(err)
        cb(null,isMatch)
    })
}
// Generate Tokens
UserSchema.methods.generateToken = function(cb){
    var user = this;

    var token = jwt.sign(user._id.toHexString(),config.HASH)
    user.token = token
    user.save(function(err,user){
        if (err) return cb(err)
        cb(null,user)
    })
}

UserSchema.statics.findByToken = function(token,cb){
    var user = this;

    jwt.verify(token,config.HASH, function(err,decode){
        user.findOne({"_id":decode,"token":token}, function(err,user){
            if(err) return cb(err)
            cb(null,user)
        })
    })
}

UserSchema.methods.deleteToken = function(token,cb){
    var user = this;
    user.updateOne({$unset:{token:1}},(err,user)=>{
        if(err) return cb(err)
        cb(null,user)
    })
}

const User = mongooose.model('User',UserSchema)


module.exports = { User } 