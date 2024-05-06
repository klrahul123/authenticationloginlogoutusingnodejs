const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const userController = require('./controller/user')
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const PORT=5000
mongoose.connect('mongodb://localhost:27017/Kempa').then(()=>{      // isme jo /Kempa likha hai to ye database ka name hai jiska name Kempa hai aur ye hmara local mangodb compass me data ko bhej rhe h online wale mongodb me nhi

    console.log("DB connected successfully");
    app.listen(PORT, ()=>{
        console.log(`Server is running on port: ${PORT}`);
    })

}).catch(error => console.log(error));


app.post('/signup', userController.signup)  // ye hmne routes ko define kiya hua hai
app.post('/signin', userController.signin)



