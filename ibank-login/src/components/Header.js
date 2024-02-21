import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MainLogo from './Logo';
import { MainPhoneNumber } from '../utils/Constants';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { Grid, Stack } from '@mui/material';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar disableGutters sx={{padding:"0rem 2rem"}}>
         <MainLogo  customerStyle={{flexGrow:0, marginRight:2}}/>
         <span style={{flexGrow:1}}/>
          <PhoneInTalkIcon sx={{paddingRight:1}}/>
          <Typography variant="h6" component="div"  >
            {MainPhoneNumber}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}