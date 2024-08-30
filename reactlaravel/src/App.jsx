
import Nav from "./components/Navbar/Nav";
import Get from "./components/getstarted/Get"
import Login from "./components/Login/Login";
import Vscode from "./assets/img/capture.png"
import './App.css'


const App = () => {
  return (
    <>
      <div className="navbarnya">
        <Nav className='Nav'/>
      </div>
      <div className="Textnya">
        <h1>
          Mau Cari Atau Ingin Jadi Developer?
        </h1>
        <p>
          Yhoiki Team adalah komunitas yang berfokus di bidang It, Kami menyediakan berbagai macam jasa yang kamu cari, dan kami juga membuka bootcamp skill yang akan di dampingi mentor yang sudah profesional!
        </p>
      </div>
      <div className="get">
        <Get />
      </div>
      <img src={Vscode} className="Vscode"/>
    </>
  )
}

export default App