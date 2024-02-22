import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Stack from '@mui/material/Stack';
import Footer from "../components/Footer.js";
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import Typography from '@mui/material/Typography';
import { COLORS, MainPhoneNumber } from '../utils/Constants';

const MainLayout =()=>{
     return (
      <Stack  sx={{flexFlow:1, display:"flex", flexDirection:"column", minHeight:"100vh"}}className="App">
        <Header 
            navItems={ [<PhoneInTalkIcon sx={{paddingRight:1}} style={{color:COLORS.primary}}/>,
                    <Typography variant="h6" component="div" color={COLORS.primary} >
            {MainPhoneNumber}</Typography>]} className="app-bar"/>
             <Outlet/>
        <Footer/>
      </Stack>
     )


}
export default MainLayout;