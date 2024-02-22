import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MainLogo from './Logo';
import { COLORS } from '../utils/Constants';
export default function Header({navItems=[]}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:COLORS.primaryFont, boxShadow:`0px 0.1px ${COLORS.default}` , borderBottom:"1px solid"}}>
        <Toolbar disableGutters sx={{padding:"0rem 2rem"}}>
         <MainLogo  customerStyle={{flexGrow:0, marginRight:2}}/>
         <span style={{flexGrow:1}}/>
          {navItems}
        </Toolbar>
      </AppBar>
    </Box>
  );
}