const { response } = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://dhanushacharya:dhanush77@dhanush.tvgzqaj.mongodb.net/?retryWrites=true&w=majority',
  {
    useUnifiedTopology:true,
    useNewUrlParser:true,
  }  
)
.then((response) => {
    console.log("Connexted to Database");
})
.catch((error) => {
    console.log(error);
});