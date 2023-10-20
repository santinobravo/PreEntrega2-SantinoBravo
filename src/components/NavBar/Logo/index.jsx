import logo from "../../../assets/icons/logo.png"
import "../../../App.css"


function Logo(){
    return(
        <div className="logo">
            <img src={logo} alt="logo" className="logo" />
        </div>
    )
}
export default Logo;