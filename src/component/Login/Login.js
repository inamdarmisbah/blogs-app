import { useNavigate } from "react-router-dom";

function Login(){
        const navigate=useNavigate();
        const gotoInfo=() =>{ 
            navigate('/Info')
        
        }
return(
<div className=" bg-gray-300 h-screen">
<div className=" flex justify-center">
<div className="w-[27%] mt-[30px] bg-gray-200 shadow-2xl rounded-md p-[20px] ">
<div className="text-[28px] font-bold mb-[5px]">Blogs !</div>
<div>Publish Your passion,Your way..</div>
<hr className="border-1 mt-2 border-gray-500"></hr>
<div className="text-blue-900 text-center  text-[30px] font-bold m-[10px]">Login</div>
<label className="text-[15px]">Email id</label>
<input type="text" placeholder=" text@gmail.com"  className="w-full mt-[5px]  rounded-md  mb-[10px] p-[10px]"></input>
<label className="text-[15px]">Password</label>
<input type="password" placeholder=" text@123"  className="w-full rounded-md mt-[5px] p-[10px]"></input>
<button className="bg-blue-900 text-white text-[17px] rounded-lg w-full p-[7px] mt-[20px]" onClick={gotoInfo}>Login</button>
</div>
</div>
</div>
)
}
export default Login;