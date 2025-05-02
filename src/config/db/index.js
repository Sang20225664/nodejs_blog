
const mongoose = require('mongoose');

async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,});
    }
    catch(error){
        console.log('Connect failure!');
    }
    console.log('Connect success!');
}

module.exports = { connect };
