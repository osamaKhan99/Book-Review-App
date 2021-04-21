const config = {
    production: {
        HASH: process.env.HASH,
        DATABASE: process.env.MONGO_URI
    },
    default:{
        HASH: "HASHINGPASSWORD",
        DATABASE: "mongodb://localhost:27017/bookReview"
    }
}
exports.get = function get(env){
    return config[env] || config.default
} 