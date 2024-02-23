import * as React from 'react';
import { COLORS, SecurityBasicsData } from '../utils/Constants';
import { Box, Card, CardContent, CardHeader, Divider, Grid, List, ListItem, Modal, Stack, Typography } from '@mui/material';
import Header from './Header';
import certificate from "../images/SSL-certificate.webp"
import Image from './Image';
import CustomizedButtons from './CustomerButton';
export default function SecurityBasics({ handleClose, open }) {
    const handleClose1 =(field, value)=>handleClose()
    const securityBasics = SecurityBasicsData.map((value, index) => <ListItem key={index+1}>{`${index+1}. ${value}`}</ListItem>)
    const Title = () => {
        return (
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <Header  navItems={<Typography variant='subtitle1' color={COLORS.default}>Security Basics</Typography>}/>
                </Grid>
                <Grid item xs={12} display={"flex"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"}>
                </Grid>
                <Grid item xs={12} display={"flex"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"}>
                <Image image={certificate} alt={"SSL certificate "} customStyle={{ width: "20%" }} />
                </Grid>
      
            </Grid>

        )
    }
   
    return (
        <Modal open={open} onClose={() => handleClose()} >

            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height:"100vh" }}>

                <Card >
                    <CardHeader title={<Title />}  />
                    <CardContent>
                        <List>{securityBasics}</List>
                    </CardContent>
                    <Divider/>
                    
                    <Stack direction="row"
                            justifyContent="flex-end"
                            alignItems="baseline"
                            spacing={2}
                            padding={2}>
                        <CustomizedButtons field={"close"} handleInput={handleClose1} label={"Done"} variant={"outlined"} customStyle={{ size: "large" }} />
                    </Stack>
                   
                </Card>


            </Box>


        </Modal>
    );
}