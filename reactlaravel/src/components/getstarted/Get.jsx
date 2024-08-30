import { IoSearchSharp } from "react-icons/io5";
import './Get.css'

const Get = () => {
    return (
        <>
        <div className="full" >
            <div className="wadah_get">
                <input className="searchinput" name="search" type="search" placeholder="Search" />
                <IoSearchSharp className="logosearch" />
                <a className="get_text" href="">Get Started</a>
            </div>
        </div>
        </>
    )
}

export default Get