const mongoose = require('mongoose');

const url = "mongodb+srv://danishfarooqui2018:Danish@cluster0.izjnzvu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// connect to the database

// asynchronous - returns a promise
mongoose.connect(url)
.then((result) => {
    console.log('connected to database');
})
.catch((err) => {
    console.log(err);
    
});

module.exports=mongoose;

