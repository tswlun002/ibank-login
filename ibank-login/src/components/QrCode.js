import { Card, CardActions, CardContent, CardHeader, Divider, Grid, List, ListItem, Modal, Typography } from "@mui/material";
import { COLORS, QR } from "../utils/Constants";
import { useEffect, useState } from "react";
import QRCode from 'react-qr-code';
import CustomizedButton from "./CustomerButton";
import { Box } from "@mui/system";

export default function QrCode({ open, setOpen }) {
    const handleClose1 = (field, value) => setOpen(false)
    const [counter, setCounter] = useState(QR.timer);
    
    useEffect(() => {
        const timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);

    return (
        <Modal open={open && counter !== 0} onClose={() => setOpen(false)}>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height:"100vh" }}>
                <Card sx={{ maxWidth:"400px", boxShadow: "none" }}>
                    <CardHeader
                        title={<Typography variant="subtitle2" fontStyle={'arial'} align={"center"} color={COLORS.error}>Remaining Time</Typography>}
                        subheader={<Typography variant="subtitle2" fontStyle={'arial'} align={"center"} color={COLORS.error}>{counter}</Typography>}
                    />
                    <CardContent >
                        <Grid container spacing={1}>
                             <Grid item xs={12}>    
                            <Typography align={"center"}variant="subtitle1" color={COLORS.primary}>{QR.title}</Typography>
                            </Grid>
                            <Grid item xs={12} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"row"} >   
                            <QRCode
                                title="Capitec"
                                value={QR.code}
                                bgColor={COLORS.primaryFont}
                                fgColor={COLORS.secondaryButton}
                                size={"150px"}

                            />
                            </Grid >
                            <Grid item xs={12}>   
                            <Typography variant="h6" textAlign={"center"} >{QR.instructionTitle}</Typography>
                            </Grid>
                            <Grid item xs={12}  display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"row"}>   
                            <List>{QR.instructions.map((data, index) => <ListItem key={index}>{`${index + 1}. ${data}`}</ListItem>)}</List>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <Divider />
                    <CardActions sx={{
                        direction: "row",
                        justifyContent: "flex-end",
                        alignItems: "baseline",
                        spacing: 2,
                        padding: 2,
                        size: "10px"
                    }}>
                        <CustomizedButton field={"close"} handleInput={handleClose1} label={"Cancel"} variant={"outlined"} customStyle={{ size: "medium" }} />
                    </CardActions>

                </Card>
            </Box>
        </Modal>
    )
}