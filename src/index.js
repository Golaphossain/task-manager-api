const express=require('express')
require('./db/mongoose')
const User=require('./models/user')
const Task=require('./models/task')
const userRouter=require('./routers/user')
const taskRouter=require('./routers/task')
const bcrypt = require('bcryptjs')
const jwt=require('jsonwebtoken')

const app=express()
const port=process.env.PORT

// app.use((req,res,next)=>{
//     if (req.method==='GET') {
//         res.send('Get request are disabled')
//     }
//     else{
//         next()
//     }
// })

// app.use((req,res,next)=>{
//     if (req.method) {
//         res.status(503).send('site is under maintance please try back later')
//     }
//     else{
//         next()
//     }
// })


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port,()=>{
    console.log('Server is up on port '+port)
})


// const myFunction = async () => {
//     const token=jwt.sign({_id:'abc123'},'thisisnewcourse',{expiresIn:'7 days'})
//     console.log(token)
//     const data=jwt.verify(token,'thisisnewcourse')
//     console.log(data)
// }

// myFunction()


// const main=async()=>{
    // const task=await Task.findById('5e87e1381358040e86bd3655')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)
//     const user=await User.findById('5e87e0ae1358040e86bd3653')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }
// main()
// const multer=require('multer')
// const upload=multer({
//     dest:'images',
//     limits:{
//         fileSize:1000000
//     },
//     fileFilter(req,file,cb){
//         // if(!file.originalname.endsWith('.pdf')){
//         //     return cb(new Error('please upload a pdf'))
//         // }
//         if(!file.originalname.match(/\.(doc|docx)$/)){
//             return cb(new Error('please upload a word document'))
//         }
//         cb(undefined,true)
//     }
// })
// app.post('/upload',upload.single('upload'),(req,res)=>{
//     res.send()
// },(error,req,res,next)=>{
//     res.status(400).send({error:error.message})
// })