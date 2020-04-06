//crude create read update delete
// const mongodb=require('mongodb')
// const MongoClient=mongodb.MongoClient
// const objectID=mongodb.objectID

const {MongoClient, ObjectID}=require('mongodb')

const connectionUrl='mongodb://127.0.0.1:27017'
const databaseName='task-manager'

// const id=new ObjectID()
// console.log(id)
// console.log(id.getTimestamp())

MongoClient.connect(connectionUrl,{useNewUrlParser:true},(error,client)=>{
    if(error){
        return console.log('Unable to connect to database!')
    }
    const db=client.db(databaseName)

    // db.collection('users').insertOne({
    //     _id:id,
    //     name:'Golap',
    //     age:24
    // },(error,result)=>{
    //     if(error){
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name:'golap',
    //         age:23
    //     },
    //     {
    //         name:'hasan',
    //         age:26
    //     }
    // ],(error,result)=>{
        // if(error){
        //     return console.log('Unable to insert user')
        // }
        // console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description:'donot go out home',
    //         completed:true
    //     },{
    //         description:'Allah forgive us',
    //         completed:true
    //     },
    //     {
    //         description:'Plot the plants',
    //         completed:true
    //     }
    // ],(error,result)=>{
    //     if(error){
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('users').findOne({name:'golap'},(error,user)=>{
    //     if(error){
    //         return console.log('unable to fetch')
    //     }
    //     console.log(user)
    // })

    // db.collection('users').findOne({_id:new ObjectID("5e7ee30a19c5b30c14d772b8")},(error,user)=>{
    //         if(error){
    //             return console.log('unable to fetch')
    //         }
    //         console.log(user)
    //     })
            //read
    // db.collection('users').find({age:24}).toArray((error,users)=>{
    //     console.log(users)
    // })
    // db.collection('users').find({age:24}).count((error,count)=>{
    //     console.log(count)
    // })
    // db.collection('tasks').findOne({_id:new ObjectID("5e7ed99055bcd71074feb914")},(error,result)=>{
    //     if(error){
    //         console.log('unable to find')
    //     }
    //     console.log(result)
    // })
    // db.collection('tasks').find({completed:false}).toArray((error,tasks)=>{
    //     console.log(tasks)
    // })
            //update
        // db.collection('users').updateOne({
        //     _id:new ObjectID("5e7ed1873676720d3c083741")
        // },{
        //     $set:{
        //         name:'Hossain'
        //     }
        //     ,
        //     $inc:{
        //         age:1
        //     }
        // }).then((result)=>{
        //     console.log(result)
        // }).catch((error)=>{
        //     console.log(error)
        // })
        // db.collection('tasks').updateMany({
        //     completed:true
        // },{
        //     $set:{
        //         completed:false
        //     }
        // }).then((result)=>{
        //     console.log(result.modifiedCount)
        // }).catch((error)=>{
        //     console.log(error)
        // })
    //Delete
    // db.collection('users').deleteMany({
    //     age:24
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })
    db.collection('tasks').deleteOne({
        description:'Plot the plants'
    }).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })
})