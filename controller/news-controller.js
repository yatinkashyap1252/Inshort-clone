import News from '../model/news-schema.js'

export const getNews=async(req,res)=>{
    try{
        let info=await News.find({})
        res.status(200).json(info)
    }catch(error){
        res.status(500).json({message:info.message})
    }
}