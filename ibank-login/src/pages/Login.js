import Grid from "@mui/material/Unstable_Grid2";
import Image from "../components/Image";
import global from "../images/globalone_hero.webp"
import hello from "../images/hello.png"
import CustomizedTextField from "../components/CustomizedTextField";
import CustomizedButton from "../components/CustomerButton";
import InputAdornment from '@mui/material/InputAdornment';
import { IconButton } from "@mui/material";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useEffect, useReducer, useState } from "react";
import QrCode from "../components/QrCode";
import { useNavigate } from "react-router";
const Login = () => {
    const navigate  = useNavigate();
    const INITI_STATE = {   email: "",password: "",passwordVisible:false,isLoading:false,isHardToken:false,isSoftToken:false, isAccountVerified:false, isLoginError:false,message: '', isLoginSuccessful:false,data:{}}
    const [formState, dispatchForm] = useReducer((state, action)=>{return {...state , ...action}}, INITI_STATE);
    const [qrOpen, setOpenQr] = useState(false);
    const handleInput=(field="",value="")=>{
        dispatchForm({[field]:value})
    }
    const handleButton =(field="",value="")=>{
        if(formState.email===''){
            dispatchForm({isLoginError:true});
        }else{
            const tokenType= (formState.email==='accessfacility1'&&value)?"isSoftToken":(formState.email==='accessfacility2'&&value)?"isHardToken":"none"
            dispatchForm({[field]:value,[tokenType]:true})
        }

        if((value==="isLoginSuccessful" && value) ||(formState.email!=="" && formState.password!=="" && formState.isAccountVerified)){
             navigate("portifolio");
        }
    }

    useEffect(()=>{setOpenQr(true);},[formState.isAccountVerified])
    useEffect(()=>{dispatchForm({...INITI_STATE});},[qrOpen])
    
    const showHidePassword = {
        endAdornment: (
          <InputAdornment    position="end">
            <IconButton 
              onClick={()=>dispatchForm({passwordVisible:!formState.passwordVisible})} 
           >
            {formState.passwordVisible?<VisibilityIcon/>:<VisibilityOffIcon/>}
            </IconButton>
          </InputAdornment>
        )
      }

    return (
        <Grid container  direction="row" justifyContent="center" alignItems="start" padding={"5rem"}>    
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
                        <CustomizedTextField label={"Account number/username"}  handleInput={handleInput} field={"email"}
                            customStyle={{ placeholder: "Enter account number/username", fullWidth: true,size:"small",required:true,
                            value:formState.email,}}
                        />
                    </Grid>
                    {(formState.isAccountVerified&&formState.isHardToken)&&
                    <Grid container xs={12}sm={12} md={7} direction="row" justifyContent="start" alignItems="center" paddingBlock={"1rem"} >
                        <CustomizedTextField handleInput={handleInput} field={'password'} label={"Password/Remote PIN"}
                            customStyle={{ placeholder: "Enter password/remote PIN", fullWidth: true,size:"small",
                                           type:formState.passwordVisible?"text":"password",
                                            required:true,value:formState.password,autoComplete:'new-password',
                                        InputProps:showHidePassword 
                                    }}
                        />
                    </Grid>}
                    <Grid container xs={12}sm={12} md={7} direction="row" justifyContent={{md:"start",sm:"center"}} alignItems="center" paddingTop="1rem" >
                        <CustomizedButton
                             field={formState.isAccountVerified?"isLoginSuccessful":"isAccountVerified"}
                             handleInput={handleButton} label={formState.isAccountVerified?"Sign In":"Continue"}
                             variant={"contained"}  customStyle={{ fullWidth: true, size:"large"}} 
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid display={{xs:"flex", sm:"none"}} container sm={12} direction="row" justifyContent="center" alignItems="center"  >
                <Image image={global} alt={"Global one image"} key={"global-one"} customStyle={{ width: "90%" }} />
            </Grid>
            {
                (formState.isAccountVerified&&formState.isSoftToken)&&
                    <QrCode open={qrOpen} setOpen={setOpenQr} />
                
            }
            

        </Grid>

    )

}
export default Login;