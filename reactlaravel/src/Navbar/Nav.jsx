import { Search, ChevronDown } from "react-feather";
import logo from "./assets/yoiki (2).png"
import "./Nav.css"

const Nav = () => {
    return (
        <>
            <div className="navbar">
                <div className="background">
                    <div className="wadah_navbar">
                        <div className="logonya"><img src={logo} alt="y" /><a href="">Yhoiki Team</a></div>
                        <ul className="subisi">
                            <li><a href="Need Dev">Need Dev</a></li>
                            <li className="adacevron"><a href="Order">Order</a><ChevronDown className="ChevronDown"/></li>
                            <li className="adacevron"><a href="Need Dev">Bootcamp</a><ChevronDown className="ChevronDown"/></li>
                            <li className="adacevron"><a href="Need Dev">Comunity</a><ChevronDown className="ChevronDown"/></li>
                        </ul>
                        <ul className="LogTer">
                            <Search/>
                            <li><a href="Need Dev">Log In</a></li>
                            <li><a href="Need Dev">Register</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav;