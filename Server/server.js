const express = require("express");
const cookieParser = require("cookie-parser");
const mongooose = require("mongoose");
const config = require("./config/config").get(process.env.NODE_ENV)
const app = express();
 
mongooose.Promise = global.Promise
mongooose.connect(config.DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})

const { User } = require("./models/user");
const { Book } = require("./models/book");
const { auth } = require("./middleware/auth");

app.use(express.json())
app.use(cookieParser())


// GET
app.get('/api/auth',auth,(req,res)=>{
    res.json({
        isAuth: true,
        id: req.user._id,
        email: req.user.email,
        firstname: req.user.firstname,
        lastname: req.user.lastname
    })
})

app.get('/api/logout', auth, (req,res)=>{
    req.user.deleteToken(req.token,(err,user)=>{
        if(err) return res.status(400).send(err)
        res.sendStatus(200)
    })
})

app.get('/api/getBook',(req,res)=>{
    const id = req.query.id

    Book.findById(id,(err,doc)=>{
        if(err) return res.status(400).send(err)
        res.send(doc);
    })
})

app.get('/api/books',(req,res)=>{
    const skip = parseInt(req.query.skip);
    const limit = parseInt(req.query.limit);
    const order = req.query.order;

    Book.find().skip(skip).sort({_id:order}).limit(limit).exec((err,doc)=>{
        if(err) return res.status(400).send(err)
        res.send(doc);
    })
})

app.get('/api/getReviewer',(req,res)=>{
    var id = req.query.id;

    User.findById(id,(err,doc)=>{
        if(err) return res.status(400).send(err)
        res.json({
            firstname: doc.firstname                ,
            lastname: doc.lastname
        })
    })
})

app.get('/api/users',(req,res)=>{

    User.find({},(err,doc)=>{
        if(err) return res.status(400).send(err)
        res.status(200).send(doc)
    })
})

app.get('/api/user_post',(req,res)=>{

    Book.find({'ownerId':req.query.user}).exec((err,docs)=>{
        if(err) return res.status(400).send(err)
        res.send(docs)
    })
})

//POST
app.post('/api/book',(req,res)=>{
    const book = new Book(req.body)

    book.save((err,doc)=>{
        if(err) return res.status(400).send(err)
        res.status(200).json({
            post:true,
            bookId: doc._id
        })
    })
})

app.post('/api/register',(req,res)=>{

    const user = new User(req.body)

    user.save((err,doc)=>{
        if(err) return res.status(400).json({'err':err})
        res.status(200).json({
            success:true,
            user:doc
        })
    })
})

app.post('/api/login',(req,res)=>{
    
    User.findOne({'email':req.body.email},(err,user)=>{
        if(!user) return res.status(400).json({isAuth:false,message:"User not found!"})

        user.ComparePass(req.body.password,(err,isMatch)=>{
            if(!isMatch) return res.json({
                isAuth: false,
                message: 'Incorrect Password'
            })
            user.generateToken((err,user)=>{
                if(err) return res.status(400).send(err)
                res.cookie('auth',user.token).json({
                    isAuth: true,
                    message: "login Successfully",
                    id: user._id,
                    email: user.email
                })
            })
        })
    })
})

// UPDATE
app.patch('/api/updateBook',(req,res)=>{
    Book.findByIdAndUpdate(req.body._id,req.body,{new:true},(err,doc)=>{
        if(err) return res.status(400).send(err)
        res.json({
            updated: true,
            doc
        })
    })
})

// DELETE
app.delete('/api/deleteBook',(req,res)=>{
    const id = req.query.id;
    Book.findByIdAndRemove(id,(err,doc)=>{
        if(err) return res.status(400).send(err)
        res.json({delete:true})
    })
})


const port = process.env.PORT || 3001;
app.listen(port,()=>{
    console.log(`Server is running on Port ${port}`)
})