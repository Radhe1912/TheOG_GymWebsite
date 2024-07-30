var expr=require('express');
var app=expr();
var mg=require('mongoose');
var cors=require("cors")

app.use(cors())
app.use(expr.json())

mg.connect("mongodb://127.0.0.1:27017/Gym").then(() => {
  console.log("Database connected")
}).catch((err) => console.log(err))

// For User
const userSchema = new mg.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  pwd: {type: String, required: true}
}, {
  versionKey: false
})
const user=new mg.model("users", userSchema)

// For sign-up API
app.post("/sign-up", async(req, res) => {
  let result = await user.findOne({email: req.body.email})
  if(result){
    res.send({status: false})
  } else {
    let obj=new user({
      name: req.body.name,
      email: req.body.email,
      pwd: req.body.pwd
    })
    await obj.save()
    res.send({status: true, data: obj, msg: "User registered"})
  }
})

// For log-in API
app.post("/log-in", async(req, res) => {
  let result = await user.findOne({email: req.body.email, pwd: req.body.pwd})
  if(result){
    res.send({status: true, data: result, msg: "User authenticated"})
  } else {
    res.send({status: false, msg: "Invalid User"})
  }
})



app.listen(3005, () => console.log("Server started"))