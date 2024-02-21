import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Stack from '@mui/material/Stack';
import Footer from "../components/Footer.js";

const MainLayout =()=>{
     return (
      <Stack className="App">
        <Header className="app-bar"/>
             <Outlet/>
        <Footer/>
      </Stack>
     )


}
export default MainLayout;