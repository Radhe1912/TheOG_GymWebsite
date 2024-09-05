const express = require("express")
const mongoose = require('mongoose')
const v = require("validator")
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(bodyParser.json())

mongoose.connect('mongodb://127.0.0.1/Gymdata');

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      minlength: [3, 'Minimum length must be 3'],
      maxlength: [8, 'Maximum length must be 8'],
    },
    lastname: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: [8, 'Minimum length must be 8'],
      maxlength: [12, 'Maximum length must be 12'],
    },
    email: {
      type: String,
      validate(val) {
        if (!v.isEmail(val)) {
          throw new Error("enter valid email")
        }
      }
    },
    mobile: {
      type: Number,
      maxlength: [10, 'Maximum length must be 10'],
    },
     
  })

const User = new mongoose.model('User', UserSchema);

app.post('/Signup', async (req, res) => {
  try {
    console.log(JSON.stringify(req.body));
    const { username, lastname, password, email, mobile } = req.body;
    const newUser = new User({ username, lastname, password,email, mobile })
    await newUser.save()
    console.log(newUser)
    res.send()
  } catch (error) {
    res.status(400).json({ "error": error })
  }
})
app.listen(3001,()=>{
  console.log("Server Started");
});