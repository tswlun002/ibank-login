import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import { SecurityBasics } from "../utils/Constants";
import { NavLink } from "react-router-dom";
import SecurityIcon from '@mui/icons-material/Security';

export default function Footer() {

    const securityBasics = SecurityBasics.map((value, index) => <Typography
        key={index} variant="body2" color="text.secondary">{`${index}. ${value}`}
    </Typography>)
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: (theme) =>
                    theme.palette.mode === "light"
                        ? theme.palette.grey[200]
                        : theme.palette.grey[800],
                p: 6,
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={6} sm={3}>
                       <BottomNavigation showLabels>
                            <BottomNavigationAction label="Security Basics" icon={<SecurityIcon/>} />
                        </BottomNavigation> 
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <NavLink>
                            <Typography variant="h6" color="text.primary" gutterBottom>
                                Capitec Bank
                            </Typography>
                        </NavLink>
                    </Grid>
                    <Grid item xs={6} sm={3}>

                        <Link href="https://www.facebook.com/" color="inherit">
                            <Typography variant="h6" color="text.primary" gutterBottom>
                                Security
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={3}>

                        <Link href="https://www.facebook.com/" color="inherit">
                            <Typography variant="h6" color="text.primary" gutterBottom>
                                Privacy Centre
                            </Typography>
                        </Link>
                    </Grid>
                </Grid>
                <Box mt={5}>
                    <Typography variant="body2" color="text.secondary" align="center">
                        {"Copyright © "}
                        <Link color="inherit" href="https://www.capitecbank.co.za/privacy-centre/">
                            <Typography variant="h6" color="text.primary" gutterBottom>
                                capitec
                            </Typography>
                        </Link>{" "}
                        {new Date().getFullYear()}
                        {"."}
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}