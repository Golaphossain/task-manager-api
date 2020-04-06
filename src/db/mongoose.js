const mongoose=require('mongoose')

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false
})

// const me=new User({
//     name:' hafiz ',
//     email:'GMAIL@gmail.com',
//     // age:-2
//     password:'password123'
// })
// me.save().then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })


// const task=new Task({
//     // description:'yes we did'
//     // completed:true
// })
// task.save().then(()=>{
//     console.log(task)
// }).catch((error)=>{
//     console.log(error)
// })