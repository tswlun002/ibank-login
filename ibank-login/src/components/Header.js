import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MainLogo from './Logo';
import { COLORS } from '../utils/Constants';
export default function Header({navItems=[]}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{backgroundColor:COLORS.primaryFont, boxShadow:`0px 5px 1px -5px ${COLORS.default} !important` , borderBottom:"1px solid"}}>
        <Toolbar disableGutters sx={{padding:"0rem 2rem",border:"none"}}>
         <MainLogo  customerStyle={{flexGrow:0, marginRight:2}}/>
         <span style={{flexGrow:1}}/>
          {navItems}
        </Toolbar>
      </AppBar>
    </Box>
  );
}