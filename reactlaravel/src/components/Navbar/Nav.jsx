import { Search, ChevronDown } from "react-feather";
import logo from "../../assets/img/logotop.png"
import "./Nav.css"

const Navbar_buatan_resta = () => {
    return (
        <>
            <div className="navbar">
                <div className="background">
                    <div className="wadah_navbar">
                        <div className="logonya"><img src={logo} alt="y" /><p className="text_logo">Yhoiki Team</p></div>
                        <ul className="subisi">
                            <li><a href="Need Dev">Need Dev</a></li>
                            <li className="adacevron"><a href="Order">Order</a><ChevronDown className="ChevronDown"/></li>
                            <li className="adacevron"><a href="Need Dev">Bootcamp</a><ChevronDown className="ChevronDown"/></li>
                            <li className="adacevron"><a href="Need Dev">Comunity</a><ChevronDown className="ChevronDown"/></li>
                        </ul>
                        <ul className="LogTer">
                            <Search className="search"/>
                            <li className="login"><a href="Need Dev">Log In</a></li>
                            <li className="register"><a href="Need Dev">Sign In</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar_buatan_resta;