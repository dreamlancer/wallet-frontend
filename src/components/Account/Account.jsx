import React, { useEffect, useState } from "react";

import {Box, Checkbox, Container, CssBaseline, Grid, Link, Stack, Typography} from "@mui/material";
import {
    BoxStyle,
    ContainerStyle, IconCircle,
    InputField,
    NewUserStyle,
    ORSignin,
    OrStick,
    RightImage,
    SignInButton,
    Title
} from "./style";
import {FiLinkedin, FiFacebook, FiTwitter} from 'react-icons/fi';
import CashLogo from '../../assets/imgs/WhiteLogo.png'
import {Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import GoogleLogin from 'react-google-login';
// import FacebookLogin from 'react-facebook-login';
import axios from "axios";
import moment from "moment-timezone";

const Account = () => {
    const router = useNavigate()
    const [input, setInputState] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrorsState] = useState({});
    const [loginError, setLoginError] = useState('');
    useEffect(() => {
        moment.tz.setDefault('America/Los_Angeles');
    }, [])

    const handleLoginSuccessWithGoogle = async (data) => {
        try {
            console.log(data)
            const res = await axios.get(process.env.REACT_APP_ENDPOINT + "/users/login/google", {params: {token: data.tokenId}})
            console.log(res.data)
        } catch(err) {
            console.log(err)
        }
    }

    const handleLoginFailureWithGoogle = () => {

    }

    const submitHandler = async () => {
        if(validate()){
            const req = { 
                email : input.email,
                password : input.password,
            };
            const res = await axios.post(process.env.REACT_APP_ENDPOINT + "/auth/signin", req).catch(error=>{
                setLoginError(error.response.data.message)
            })
            if(res.status === 200) {
                router('/Marketplace/wallet')
            }
        }
    }

    const validate = () => {
        let errors_val = {};
        let isValid = true;
        if (!input.email) {
          isValid = false;
          errors_val.email = "This field is required";
        } else if (input.email !== undefined) {
            
          var pattern = new RegExp(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/);
          if (!pattern.test(input.email)) {
            isValid = false;
            errors_val.email = "The email does not seem to be correct";
          }
        }
        if (!input.password) {
          isValid = false;
          errors_val.password = "This field is required";
        }
        setErrorsState(errors_val);
    
        return isValid;
    }
    return (
        <Box sx={ContainerStyle}>
            <CssBaseline/>
            <Container maxWidth={"xl"}
                       sx={{display: "flex", alignItems: "center", justifyContent: "center", height: "100%"}}>
                <Box sx={BoxStyle}>
                    <Grid container sx={{height: "100%"}}>
                        <Grid item lg={6} xs={12} container direction={"column"} alignItems={"center"}
                              justifyContent={"center"}
                              sx={{p: 4, gap: "12px"}}>
                            {/* New User ??! */}
                            <Stack spacing={2}>
                                <Box>
                                    <img src={CashLogo} width={"140px"} alt=""/>
                                </Box>
                                <Typography variant={"h1"} component={"div"} sx={Title}>Sign in</Typography>
                                <Typography variant={"h1"} component={"div"} sx={NewUserStyle}>new user?
                                    <Link
                                        onClick={() => {
                                            router('/Register')
                                        }}
                                        sx={{color: "#fee934", cursor: "pointer", textDecoration: "none"}}>
                                        create a free account
                                    </Link>
                                </Typography>
                                <Formik initialValues={{email: '', password: ''}} onSubmit={() => {
                                }}>
                                    {(formikProps) => (<Form>
                                        <Stack direction={"column"} alignItems={"start"} spacing={1}>
                                            <InputField 
                                                label={"Username or Email"} 
                                                name={"email"}
                                                value={input.email}
                                                onChange={(e) => setInputState({...input, email: e.target.value})}
                                            />
                                            <Box sx={{color:'yellow'}}>{errors.email}</Box>
                                            <InputField 
                                                label={"Password"} 
                                                type={"password"} 
                                                name={"password"}
                                                value={input.password}
                                                onChange={(e) => setInputState({...input, password: e.target.value})}
                                            />
                                            <Box sx={{color:'yellow'}}>{errors.password}</Box>
                                            <Typography sx={{color: "#fff", fontSize: "16px", fontFamily: "NotoSans"}}>
                                                <Checkbox defaultChecked sx={{
                                                    color: "#fee934", '&.Mui-checked': {color: "#fee934"}
                                                }}/>Keep me signed in</Typography>
                                            {loginError &&
                                                <Box sx={{width:'100%', textAlign:'center', border:'1px solid red', background:'#FF000060', color:'#eeeeee', borderRadius:'12px', padding:'5px'}}>
                                                    {loginError}
                                                </Box>
                                            }
                                            <SignInButton onClick={submitHandler}>Sign in</SignInButton>
                                        </Stack>
                                    </Form>)}
                                </Formik>
                                <Stack direction={"row"} alignItems={"center"} spacing={1}>
                                    <Box sx={OrStick}></Box>
                                    <Typography variant={"p"} component={"div"} sx={ORSignin}>Or Sign in
                                        With</Typography>
                                    <Box sx={OrStick}></Box>
                                </Stack>
                                <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} spacing={3}>
                                    {/* <Box sx={IconCircle}>
                                    <GoogleLogin
                                        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                                        onSuccess={handleLoginSuccessWithGoogle}
                                        onFailure={handleLoginFailureWithGoogle}
                                        cookiePolicy={'single_host_origin'}
                                    />            
                                    </Box> */}
                                    <Box sx={IconCircle}>
                                        <FiFacebook/>
                                    </Box>
                                    <Box sx={IconCircle}>
                                        <FiLinkedin/>
                                    </Box>
                                    <Box sx={IconCircle}>
                                        <FiTwitter/>
                                    </Box>
                                </Stack>

                            </Stack>
                        </Grid>
                        <Grid item lg={6} xs={12} sx={{...RightImage, display: {xs: 'none', lg: "block"}}}>
                            {/* ======= Right IMAGE Background =====*/}
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>)
}

export default Account