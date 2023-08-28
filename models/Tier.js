const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tierSchema = new Schema({
    name: String  
});

const Tier = mongoose.model('Tier', tierSchema);

module.exports = Tier;