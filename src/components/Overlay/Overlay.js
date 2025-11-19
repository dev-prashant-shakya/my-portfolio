import classes from "./Overlay.module.css";
function Overlay(props) {
    return (
        <div className={classes.overlayColor} onClick={props.closeOverlayNav}></div>
    )
}
export default Overlay;