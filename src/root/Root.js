import React from "react";
import {Outlet} from 'react-router-dom';
import Navigation from "../components/Navigation/Navigation";
import FooterNav from "../components/FooterNav/FooterNav";
import ColorPicker from "../components/colorPicker/ColorPicker";
function RootLayout () {
    return (
        <>
            <Navigation/>
            <Outlet/>
            <FooterNav/>
            <ColorPicker/>
        </>
    )
}
export default RootLayout;