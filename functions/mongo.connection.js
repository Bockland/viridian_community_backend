const mongoose = require('mongoose');

const connectToDb = async (req, res) => {
    await mongoose.connect(process.env.MONGO_DB, { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

module.exports = { connectToDb }