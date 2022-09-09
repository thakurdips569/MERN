const mongoose = require('mongoose');


const db ='mernwss1000'
const dbUrl = `mongodb+srv://deepthakur:dipanshu@cluster0.basdgob.mongodb.net/${db}?retryWrites=true&w=majority`
// Asynchronous fn - returns promise
mongoose.connect(dbUrl)
.then((result) => {
  console.log('database connected');
})
.catch((err) => {
  console.log(err);
});

module.exports = mongoose;