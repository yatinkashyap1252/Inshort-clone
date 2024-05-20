import React from 'react'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Toolbar, Tooltip,styled } from '@mui/material';

const Image=styled('img')({
    height:50,
    margin:'auto',
})

const Header = () => {
    const url='https://e7.pngegg.com/pngimages/40/77/png-clipart-business-pearson-packaging-and-labeling-marketing-business-text-trademark.png'
    return (
        <div style={{ width: '100%', height: '80px', boxShadow: '0 0 15px rgb(0,0,0)', flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
            <Tooltip title={'menu'}>
                <Toolbar><MenuRoundedIcon/></Toolbar>
            </Tooltip>
            <Tooltip title={'www.inshort.com'} >
                <Image src={url} alt={'logo'} />
            </Tooltip>
        </div>
    )
}

export default Header