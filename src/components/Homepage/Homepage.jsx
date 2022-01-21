import React from 'react'
import {useNavigate} from "react-router-dom";
import {Box} from "@mui/system";
import {
    AppBar,
    Button,
    Container,
    CssBaseline,
    IconButton,
    Link,
    Menu,
    MenuItem,
    Toolbar,
    Typography
} from "@mui/material";
import {LgLogoStyle, LgMenuItems, LinkButtons, LinkStyle} from "../Navigation/style";
import Logo from "../../assets/imgs/cash-logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import Hero from "../Hero/Hero";
import Wallmart from "../WalletMarket/Wallmart";
import BioBar from "../Bio/BioBar";
import Offers from "../Offers/Offers";
import Roadmap from "../Roadmap/Roadmap";
import About from "../About/About";
import Terms from "../Terms/Terms";
import Outro from "../Outro/Outro";
import Footer from "../Footer/Footer";


const Homepage = () => {
    const NavHeight = "70px";
    const pages = ["Offers", "Roadmap", "White Paper"];
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const router = useNavigate();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (
        <Box sx={{display: "flex", flexDirection: "column"}}>
            <CssBaseline/>
            <AppBar
                position="fixed"
                sx={{
                    height: NavHeight,
                    bgcolor: "rgba(248, 248, 248,0.8)",

                    boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box sx={LgLogoStyle}>
                            <Link href="/">
                                <img src={Logo} alt="" style={{maxWidth: "120px"}}/>
                            </Link>
                        </Box>
                        <Box sx={LgMenuItems}>
                            {pages.map((page) => (
                                <Button key={page} onClick={handleCloseNavMenu}>
                                    <Link sx={LinkStyle} href={`#${page}`}>
                                        {page}
                                    </Link>
                                </Button>
                            ))}
                            <Button key={"Login"} onClick={handleCloseNavMenu} sx={LinkButtons} onClick={() => {
                                router('/account')
                            }}>
                                <Link sx={LinkStyle}>
                                    Sign In
                                </Link>
                            </Button>
                        </Box>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: {xs: "flex", md: "none"},
                                alignItems: "flex-end",
                            }}
                        >
                            <Box sx={{mr: 2, flexGrow: 1}}>
                                <img src={Logo} alt="" style={{maxWidth: "80px"}}/>
                            </Box>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "left",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "left",
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: {xs: "block", md: "none"},
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                                <MenuItem key={"login"} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">Sign In</Typography>
                                </MenuItem>
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            {/* // ========== MAIN */}
            <Box
                sx={{
                    mt: NavHeight,
                    width: "100%",
                    dispaly: "flex",
                    flexDirection: "column",
                }}
            >
                <Hero navH={NavHeight}/>
                <Wallmart/>
                <BioBar/>
                <Offers/>
                <Roadmap/>
                <About/>
                <Terms/>
                <Outro/>
                <Footer/>
            </Box>
        </Box>
    )
}

export default Homepage