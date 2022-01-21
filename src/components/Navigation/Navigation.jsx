import {Routes, Route, useNavigate} from 'react-router-dom'
import React from "react";
import Homepage from "../Homepage/Homepage";
import Account from '../Account/Account'
import Register from "../Register/Register";
import Marketplace from "../Marketplace/Marketplace";
import Wallet from "../Marketplace/Wallet/Wallet";

const Navigation = () => {


    return (
        <Routes>
            <Route path="/" exact element={<Homepage/>}/>
            <Route path="/Account" exact element={<Account/>}/>
            <Route path="/Register" exact element={<Register/>}/>
            <Route path="/Marketplace/*" exact element={<Marketplace/>}/>
        </Routes>

    )
        ;
};

export default Navigation;
