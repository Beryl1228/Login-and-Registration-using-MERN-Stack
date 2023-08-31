require('dotenv').config(); // 加载 .env 文件中的环境变量
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const EmployeeModel = require('./models/Employee')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URI);

app.post('/login', (req,res) =>{
    const {email ,password} = req.body
    EmployeeModel.findOne({email:email})
    .then(user =>{
        if(user){
            if(user.password === password){
                res.json("Success")
            } else {
                res.json("the password is incorrect")
            }
        } else {
            res.json("No record existed")
        }
    } )
    .catch(error => res.json(error))
})



app.post('/register', (req,res) =>{
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(error => res.json(error))
})


app.listen(3001 ,()=>{
    console.log('sever is running');
})