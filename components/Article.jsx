import styled from "@emotion/styled"
import { Box, Card, CardContent, Grid, Typography } from "@mui/material"
// import LinkIcon from '@mui/icons-material/Link';

const Photo = styled('img')({
    height: '100%',
    width: '80%',
    objectFit:'cover',
    borderRadius:'15px',
})

const Article = ({ data }) => {

    return (
        <Card style={{margin:'2rem',borderRadius:'15px',boxShadow:'0 0 15px #000'}} >
            <CardContent style={{overflow:'hidden',padding:'8px'}} >
                <Grid container >
                    <Grid item lg={5} sm={5} xs={12} >
                        <Photo src={data.url} />
                    </Grid>
                    <Grid item lg={7} md={7} sm={7} xs={12} >
                        <Typography style={{fontSize:'25px',fontWeight:'700',fontStyle:'italic'}} >{data.title}</Typography>
                        <Typography style={{fontWeight:'900',fontFamily:'sans-serif'}} >{data.author}</Typography>
                        <Typography style={{fontFamily:'sans-serif'}} >{data.description}</Typography>
                        <Box style={{display:'flex',flexdirection:'row',padding:'5px',background:'rgb(200,200,200)',borderRadius:'5px'}} >
                            <Typography><a href={data.link} style={{textDecoration:'none'}} >{data.publisher}</a></Typography>
                            <Box flexGrow={1} ></Box>
                            <Typography style={{ fontWeight: '500', fontFamily: 'monospace', color: 'grey' }} >{data.timestamp}</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Article
