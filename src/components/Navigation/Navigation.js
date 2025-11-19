import React, { useCallback, useEffect, useMemo, useState } from "react";
import NavItems from "./Nav-items";
import classes from "./Navigation.module.css";
import Overlay from "../Overlay/Overlay";
import MobNavBtn from "../MobToggleBtn/MobToggleBtn";


function Navigation () {

 const [isPhone, setIsPhone] = useState(false);
 const [toggleMobNav, setToggleMobNav] = useState(false);
 useEffect(() => {
    if(window.innerWidth < 1020) {
        setIsPhone(true);
    }
 }, [])
 const toggleMobNavHandler = useCallback(() => {
    if(isPhone) {
        setToggleMobNav(!toggleMobNav);
    }
 });

return (
  <>
    {isPhone ? (
      <>
        <MobNavBtn openMobNav={toggleMobNavHandler} />
        {toggleMobNav && (
          <>
            <Overlay closeOverlayNav={toggleMobNavHandler} />
            <header className={classes.mainHeader}>
              <div className="container">
                <nav className={classes.navLinks} onClick={toggleMobNavHandler}>
                  <NavItems />
                </nav>
              </div>
            </header>
          </>
        )}
      </>
    ) : (
      <header className={classes.mainHeader}>
        <div className="container">
          <nav className={classes.navLinks}>
            <NavItems />
          </nav>
        </div>
      </header>
    )}
  </>
);
}
export default Navigation;