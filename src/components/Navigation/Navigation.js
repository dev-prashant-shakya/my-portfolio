import React from "react";
import NavItems from "./Nav-items";
import classes from "./Navigation.module.css";


function Navigation () {
 return (
    <header className={classes.mainHeader}>
        <div className="container">
            <nav className={classes.navLinks}>
                <NavItems/>
            </nav>
        </div>
    </header>
 )
}
export default Navigation;