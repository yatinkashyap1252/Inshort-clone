import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React from 'react'

const Image1=styled('img')({
    height:40,
})

const Image2=styled('img')({
    height:27,
    paddingLeft:5,
})
const Infoheader = () => {
    const url='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'
    const url1='https://w7.pngwing.com/pngs/822/688/png-transparent-apple-on-the-app-store-screenshot-iphone-app-store-google-play-store-electronics-text-logo-thumbnail.png'
  return (
    <div style={{background:'red',height:'40px',display:'flex',alignItems:'center',width:'100%',boxShadow:'0 0 15px #000',padding:'0 1rem',borderRadius:'5px',marginBottom:'1.5rem'}} >
        <Typography style={{color:'white',fontWeight:'300'}} >For the best experience use Inshort app on your smartphone.</Typography>
        <Box flexGrow={1} ></Box>
        <Box><Image1 src={url}/></Box>
        <Box><Image2 src={url1}/></Box>
    </div>
  )
}

export default Infoheader