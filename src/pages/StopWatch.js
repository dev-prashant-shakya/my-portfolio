import React, { useState } from "react";
import classes from './Stopwatch.module.css';

function StopWatch() {
    const [isTime, setTime] = useState({hr: "00", min: "00", sec: "00", mili: "00" });
    const [isStatus, setStatus] = useState();
    const [isResume, setResume] = useState(false);

    let updateHr = isTime.hr;
    let updateMin = isTime.min;
    let updateSec = isTime.sec;
    let updateMili = isTime.mili;

    const toggleClockHandler = () => {
        if(!isResume) {
            myClockLogic();
            setStatus(setInterval(myClockLogic, 10));
            setResume(true);
        } else {
            clearInterval(isStatus);
            setResume(false);
        }
    }

    const resetClockHandler = () => {
        clearInterval(isStatus);
        setTime({hr: "00", min: "00", sec: "00", mili: "00" });
        setResume(false);
    };

    const myClockLogic = () => {
        if(updateMili === 100) {
            updateSec++;
            updateMili = 0;
        } 
        if(updateSec === 60) {
            updateMin++;
            updateSec = 0;
        }
        if(updateMin === 60) {
            updateHr++;
            updateMin = 0;
        }
        updateMili++;
        return setTime({hr: updateHr, min: updateMin, sec: updateSec, mili: updateMili});
    };

    return (
        <div className={classes.stopWatchWrapper}>
            <div className={classes.clockWrapper}>
                <h1 className={classes.clockNum}>
                    <span>{String(isTime.min).padStart(2, "0")}</span>
                    <span className={classes.dots}> : </span>
                    <span>{String(isTime.sec).padStart(2, "0")}</span>
                    <span className={classes.dots}> : </span>
                    <span>{String(isTime.mili).padStart(2, "0")}</span>
                </h1>
                
                <div className={classes.buttonWrapper}>
                    <button className={classes.startButton} type="button" onClick={toggleClockHandler}>{isResume ? "Stop" : "Start"}</button>
                    <button className={classes.resetButton} type="button" onClick={resetClockHandler}>Reset</button>
                </div>
            </div>
        </div>
    )
}
export default StopWatch;