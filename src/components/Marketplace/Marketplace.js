import React, {useEffect, useState} from 'react'
import {Link, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {AppBar, Box, CssBaseline, Drawer, List, Toolbar, Typography} from "@mui/material";
import Logo from '../../assets/imgs/cash-logo.png'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PersonIcon from '@mui/icons-material/Person';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShareIcon from '@mui/icons-material/Share';
import {NavButton, UserName} from "./style";
import {IoMdArrowDropright} from 'react-icons/io'
import MenuIcon from '@mui/icons-material/Menu';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import Wallet from "./Wallet/Wallet";
import Send from "./Wallet/Send/Send";
import Receive from "./Wallet/Receive/Receive";
import Profile from "./Profile/Profile";
import Referral from "./Referral/Referral";
import Purchase from "./Purchase/Purchase";

const drawerWidth = 300;
const AppBarHeight = "70px"
const Marketplace = () => {
    const matches = useMediaQuery('(max-width:720px)');
    const [DrawerCollapsed, setDrawerCollapsed] = useState(false)
    useEffect(() => {
        setDrawerCollapsed(true)
        return () => {
            setDrawerCollapsed(false)
        }
    }, [matches])
    //============================== STYLING SECTIon
    const DrawerStyle = {
        position: "relative",
        flexShrink: 0,
        width: DrawerCollapsed ? "0px" : drawerWidth,
        transition: "all ease-in 0.4s",
        "& .MuiDrawer-paper": {
            width: DrawerCollapsed ? "0px" : drawerWidth,
            display: DrawerCollapsed ? "none" : "block",
            transition: "all ease-in 0.4s",
            boxSizing: "border-box",
            background: "transparent linear-gradient(180deg, #FFFFFF 0%, #F7F7F7 100%) 0% 0% no-repeat padding-box",
            overflow: "hidden",
            boxShadow: "0px 4px 12px #00000030",
            borderRight: "0",
            pr: DrawerCollapsed ? 0 : 2,
        },
    }
    //============================== STYLING SECTIon
    const location = useLocation()
    const router = useNavigate()
    return (<Box sx={{display: "flex"}}>
        <CssBaseline/>
        <AppBar
            position="fixed"
            sx={{
                width: DrawerCollapsed ? "100%" : `calc(100% - ${drawerWidth}px)`,
                ml: DrawerCollapsed ? "0px" : `${drawerWidth}`,
                boxShadow: "none",
                height: AppBarHeight
            }}
        >
            <Box sx={{
                flexGrow: 1, bgcolor: "#fee934", display: "flex", px: 2, alignItems: "center",
            }}>
                <IconButton aria-label="add to shopping cart" sx={{display: DrawerCollapsed ? "block" : "none"}}
                            onClick={() => {
                                setDrawerCollapsed(!DrawerCollapsed)
                            }}>
                    <MenuIcon/>
                </IconButton>
            </Box>
        </AppBar>
        <Drawer
            sx={DrawerStyle}
            variant={"permanent"}
            anchor="left"
        >
            <Box sx={{my: 4, mx: 2}}>
                <img src={Logo} width={"140px"} alt=""/>
            </Box>
            <UserName variant={"h3"} component={"div"}> Harry Hekimian<Box
                sx={{
                    background: "transparent linear-gradient(180deg, #FEE934 0%, #FEC034 100%) 0% 0% no-repeat padding-box",
                    width: "100px",
                    borderRadius: "8px",
                    height: "5px",
                }}> </Box></UserName>
            <Toolbar/>
            <List>
                {[{
                    text: "Wallet", icon: <AccountBalanceWalletIcon/>, endIcon: <IoMdArrowDropright/>
                }, {
                    text: "Profile", icon: <PersonIcon/>, endIcon: <IoMdArrowDropright/>
                }, {
                    text: "Referral", icon: <ShareIcon/>, endIcon: <IoMdArrowDropright/>
                }, {
                    text: "Purchase", icon: <AttachMoneyIcon/>, endIcon: <IoMdArrowDropright/>
                },].map((item, index) => (<NavButton
                    size="large"
                    key={index}
                    startIcon={item.icon}
                    endIcon={item.endIcon}
                    onClick={() => {
                        router(`/Marketplace/${item.text.toLowerCase()}`);
                        setDrawerCollapsed(true)
                    }}
                >
                    {item.text}
                </NavButton>))}
            </List>
            <IconButton aria-label="add to shopping cart" sx={{position: "absolute", bottom: 10, right: 5}}
                        onClick={() => {
                            setDrawerCollapsed(!DrawerCollapsed)
                        }}>
                <ExitToAppRoundedIcon/>
            </IconButton>
        </Drawer>
        <Box
            component="main"
            sx={{
                flexGrow: 1, bgcolor: "background.default", p: 3, mt: AppBarHeight, position: "relative"
            }}
        >
            <Routes>
                <Route path="wallet" element={<Wallet/>}/>
                <Route path="wallet/send" element={<Send/>}/>
                <Route path="wallet/receive" element={<Receive/>}/>
                <Route path="profile" element={<Profile/>}/>
                <Route path="referral" element={<Referral/>}/>
                <Route path="purchase" element={<Purchase/>}/>
            </Routes>
        </Box>
    </Box>)
}


export default Marketplace


