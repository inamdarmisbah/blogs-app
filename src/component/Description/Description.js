import { useNavigate } from "react-router-dom";

function Description(){
    const navigate=useNavigate();
    const gotoInfo=() =>{ 
        navigate('/Info')
    
    }
    return(
        <div className="bg-gray-300 h-screen ">
            <div className="flex justify-center">
            <div className="w-[70%] mt-[40px] bg-white p-[20px] ">
                <input  type="text" placeholder="Title" className="text-[20px] font-bold w-[100%]  text-gray-400"/>
                <hr className="border-black"></hr>
                <textarea type="text" rows={8} cols={115} className="mt-[10px] p-5 text-gray-400 shadow-lg "></textarea>
                <div className="flex justify-end mt-[10px]">
                <button className="bg-blue-900 rounded-md mr-[15px] text-white  py-[2px] px-[5px]" onClick={gotoInfo}>Cancel</button>
                <button className="bg-blue-900 rounded-md  text-white  py-[2px] px-[5px]" onClick={gotoInfo} >Save</button>
                </div>
                </div>
                </div>
                </div>
    )
}
export default Description;