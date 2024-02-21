import { NavLink } from "react-router-dom"
import logo from "../images/capitec-logo.svg"
const MainLogo = ({customerStyle})=>{
   return <NavLink
        to={'/'}
        key={'main-logo'}
        end={'home'==="Home"}
        style={customerStyle}
        
    >
        <img src={logo} alt="App Main Logo"  style={{maxWidth:"100%", maxHeight:"100%",textDecoration:"none",}} loading="lazy"/>
    </NavLink>
}
export default MainLogo;