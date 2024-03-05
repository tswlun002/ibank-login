import {  Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Stack from '@mui/material/Stack';
import Footer from "../components/Footer.js";
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import Typography from '@mui/material/Typography';
import { COLORS, MainPhoneNumber } from '../utils/Constants';
import CustomizedButton from "../components/CustomerButton.js";
import { Link } from "@mui/material";

const MainLayout =()=>{
     const navivagate = useNavigate();
     const location = useLocation();

     const handleSignOut=(field, value)=>{
          navivagate("/");
     }
     const inPortFolio=location.pathname==="/portifolio";
     const loginItems =(inPortFolio)?[
          <Link  href="https://www.capitecbank.co.za/" sx={{ textDecoration: "none" }} ><Typography variant="h6" component="div" color={COLORS.default} padding={"0rem 2rem"} >Agreement</Typography></Link>,
          <PhoneInTalkIcon sx={{paddingRight:1}} style={{color:COLORS.border}}/>,
          <Typography variant="h6" component="div" color={COLORS.border}  paddingRight={"2rem"} >{MainPhoneNumber}</Typography>,
          <CustomizedButton variant={"contained"} label={"Sign Out"} field={"isSignedOut"} handleInput={handleSignOut}
          customStyle={{size:"medium",sx:{color:"#FFFFFF",backgroundColor:"#22607A"}, margin:"2rem 2rem"}}/>
     ]:
       [
       <PhoneInTalkIcon sx={{paddingRight:1}} style={{color:COLORS.border}}/>,
       <Typography variant="h6" component="div" color={COLORS.border} >{MainPhoneNumber}</Typography>
      ] 
    
     
     return (
      <Stack  sx={{flexFlow:1, display:"flex", flexDirection:"column", minHeight:"100vh"}}className="App">
        <Header 
            navItems={loginItems} className="app-bar"/>
             <Outlet/>
        <Footer/>
      </Stack>
     )


}
export default MainLayout;