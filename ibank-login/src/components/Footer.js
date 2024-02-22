import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import { COLORS } from "../utils/Constants";
import SecurityBasics from "./SecurityBasics";


export default function Footer() {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = ()=>{
        setOpen(true);
    };
    const handleClose = ()=>{
        setOpen(false);
    };

    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: (theme) =>
                    theme.palette.mode === "light"
                        ? theme.palette.grey[200]
                        : theme.palette.grey[800],
                p: 6,
                flexGrow:1
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={6} sm={3}>
                        <Link sx={{ textDecoration: "none" }} onClick={() => handleClickOpen()} >
                            <Typography variant="h6" color={COLORS.primary} gutterBottom>
                                Security Basics
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Link sx={{ textDecoration: "none" }} href="https://www.capitecbank.co.za/">
                            <Typography variant="h6" color={COLORS.primary} gutterBottom>
                                Capitec Bank
                            </Typography>
                        </Link>
                    </Grid>
        
                    <Grid item xs={6} sm={3}>

                        <Link sx={{ textDecoration: "none" }} href="https://www.capitecbank.co.za/privacy-centre/" color={COLORS.primary}>
                            <Typography variant="h6" color={COLORS.primary} gutterBottom>
                                Privacy Centre
                            </Typography>
                        </Link>
                    </Grid>
                </Grid>
                <Box mt={5}>
                    <Typography variant="body2" color="text.secondary" align="center">
                        {"Copyright © "}
                        <Link color="inherit" href="https://www.capitecbank.co.za/">
                            <Typography variant="h6" color="text.primary" gutterBottom>
                                capitec
                            </Typography>
                        </Link>{" "}
                        {new Date().getFullYear()}
                        {"."}
                    </Typography>
                    <SecurityBasics handleClose={handleClose} open={open} />
                </Box>
            </Container>
        </Box>
    );
}