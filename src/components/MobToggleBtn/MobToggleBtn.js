import Classes from './MobToggleBtn.module.css';
function MobNavBtn(props) {
    return (
        <button onClick={props.openMobNav} className={Classes.MobileNav}>Menu</button>
    )
}
export default MobNavBtn;