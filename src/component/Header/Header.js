import { useNavigate } from "react-router-dom";

function Header(){
    const navigate=useNavigate();
    const gotoLogin=() =>{ 
        navigate('/Login')
    
    }
    const gotoRegister=() =>{
        navigate('/Register')
    }
    const gotoHome=() =>{
        navigate('/Home')
    }
    return(
    <div className="bg-blue-900 text-white pl-8 pt-2 pb-2 flex  justify-between">
        <div className="text-[25px] cursor-pointer font-bold " onClick={gotoHome}>Blogs</div>
        <div>
            <span className="mr-10 text-[18px]  cursor-pointer font-bold" onClick={gotoLogin}>Login</span>
            <span className="mr-10 text-[18px]  cursor-pointer font-bold" onClick={gotoRegister}>Register</span>
        </div>
       
        </div>
  //  </div>
    )
}
export default Header;