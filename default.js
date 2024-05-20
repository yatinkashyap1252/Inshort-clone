import { data } from "./constants/data.js";
import News from './model/news-schema.js'

const Defaultdata=async()=>{
    try{
        await News.insertMany(data)
        console.log("data imported successfully")
    }catch(error){
        console.log('error in import in default.js',error)
    }
}

export default Defaultdata