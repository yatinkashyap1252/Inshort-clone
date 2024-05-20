import './App.css';
import Header from './components/Header';
import Infobottom from './components/Infobottom';
import Infoheader from './components/Infoheader';
import { Box } from "@mui/material";

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', width: '100vw' }} >
      <Header />
      <Box style={{margin:'auto',marginTop:'2rem',width:'70%',display:'flex',justifyContent:'center',flexDirection:'column'}} >
        <Infoheader />
        <Infobottom />
      </Box>
    </div>
  );
}

export default App;
