import Grid from "@mui/material/Unstable_Grid2";
import Image from "../components/Image";
import global from "../images/globalone_hero.webp"
import hello from "../images/hello.png"
import CustomizedTextField from "../components/CustomizedTextField";
import CustomizedButtons from "../components/CustomerButton";
const Login = () => {
    
    return (
        <Grid container  direction="row" justifyContent="center" alignItems="start" padding={"2rem"}>

            <Grid display={{xs:"none", sm:"flex"}} container sm={6} direction="row" justifyContent="center" alignItems="center"  >
                <Image image={global} alt={"Global one image"} key={"global-one"} customStyle={{ width: "70%" }} />
            </Grid>
            <Grid container sm={6} direction="row" justifyContent="start" alignItems="center">

                <Grid container sm={12} direction="row" justifyContent="start" alignItems="start" >
                    <Image image={hello} alt={"Global one image"} key={"global-one"}
                        customStyle={{ width: "70%", opacity: "0.7" }}
                    />
                </Grid>
                <Grid container sm={12} direction="row" justifyContent={{md:"start",sm:"center"}} alignItems="center" paddingBlock={"3rem"} >
                    <Grid container xs={12}sm={12} md={7} direction="row" justifyContent="start" alignItems="center"  >
                        <CustomizedTextField label={"Account number/username"}
                            customStyle={{ placeholder: "Enter account number/username", fullWidth: true,size:"small" }}
                        />
                    </Grid>
                    <Grid container xs={12}sm={12} md={7} direction="row" justifyContent={{md:"start",sm:"center"}} alignItems="center" paddingTop="1rem" >
                        <CustomizedButtons label={"Continue"} variant={"contained"} customStyle={{ fullWidth: true, size:"large"}} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid display={{xs:"flex", sm:"none"}} container sm={12} direction="row" justifyContent="center" alignItems="center"  >
                <Image image={global} alt={"Global one image"} key={"global-one"} customStyle={{ width: "90%" }} />
            </Grid>

        </Grid>

    )

}
export default Login;