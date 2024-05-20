import mongoose   from "mongoose";

const Connection=async(username,password)=>{
    const URL= `mongodb://${username}:${password}@ac-pezssqb-shard-00-00.zw1p45g.mongodb.net:27017,ac-pezssqb-shard-00-01.zw1p45g.mongodb.net:27017,ac-pezssqb-shard-00-02.zw1p45g.mongodb.net:27017/?ssl=true&replicaSet=atlas-eeva96-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Inshort-clone`
    try{
        await mongoose.connect(URL,{useNewUrlParser:true})
        console.log('server is connected successfully db.js')
    }catch(error){
        console.log("server is not connect db.js",error)
    }
}

export default Connection