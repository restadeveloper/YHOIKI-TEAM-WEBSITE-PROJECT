import { IoSearchSharp } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa"
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
                            <li className="adacevron"><a className='a' href="Need Dev">Need Dev</a></li>
                            <li className="adacevron"><a className='a' href="Order">Order</a><FaAngleDown className="ChevronDown"/></li>
                            <li className="adacevron"><a className='a' href="Need Dev">Bootcamp</a><FaAngleDown className="ChevronDown"/></li>
                            <li className="adacevron"><a className='a' href="Need Dev">Comunity</a><FaAngleDown className="ChevronDown"/></li>
                        </ul>
                        <div className="LogTer">
                            <IoSearchSharp className="search"/>
                            <a href="" className="login">Log In</a>
                            <a href="" className="register">Sign In</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar_buatan_resta;