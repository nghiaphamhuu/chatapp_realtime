const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect(
            "mongodb://localhost:27017/avatarSpace",
            { 
                useNewUrlParser: true, 
                useUnifiedTopology: true 
            })
        console.log("Connected to database")
    } catch (error) {
        console.log(error)
    }
}

module.exports = {connect};