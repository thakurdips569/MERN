const {Schema, model} = require('../conn');


// here we define the structure of model
const myschema = new Schema({
    price : Number,
    rating : String,
    productname : String
})

//Here we are creating model
module.exports = model('users',myschema);