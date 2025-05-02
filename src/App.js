import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './component/Home/Home';
import Register from './component/Register/Register';
import Header from './component/Header/Header';
import Login from './component/Login/Login';
import Info from './component/Info/Info';
import Description from './component/Description/Description';
function App() {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Header" element={<Header/>}/>
    <Route path="/Home"  element={<Home/>}/>
    <Route path="/Register" element={<Register/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/Info" element={<Info/>}/>
    <Route path="Description" element={<Description/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
