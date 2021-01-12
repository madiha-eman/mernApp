const mongoose = require('mongoose');


async function dbConnect(){
   try{
    const mydb = await mongoose.connect('mongodb+srv://madiha-eman:Blue123Moon@@cluster0.ngzij.mongodb.net/PostsApp?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
          });
          console.log('connect')
   }

   catch(e){
        console.log(e)
   }
}

module.exports = dbConnect