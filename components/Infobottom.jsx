import React, { useEffect, useState } from 'react'
import { getNews } from '../service/api'
import { Box } from "@mui/material";
import Article from './Article';

const Infobottom = () => {

  const[news,setNews]=useState([])

  useEffect(() => {
    dailynews()
  }, [])

  const dailynews = async () => {
    const response = await getNews()
    setNews(response.data)
  }
  return (
   <Box>
    {
      news.map(data=>(
        <Article data={data} />
      ))
    }
   </Box>
  )
}

export default Infobottom