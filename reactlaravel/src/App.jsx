
import Nav from "./components/Navbar/Nav";
import Login from "./components/Login/Login";
import Vscode from "./assets/img/capture.png"
import './App.css'


const App = () => {
  return (
    <>
      <div className="navbarnya">
      <Nav className='Nav'/>
      </div>
      <h1 className="text">
        Mau Cari Atau Ingin Jadi Developer ?
      </h1>
      <img src={Vscode} className="Vscode"/>
    </>
  )
}

export default App