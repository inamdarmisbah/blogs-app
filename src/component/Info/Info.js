import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Info() {
    const navigate = useNavigate();
    const gotoDesciption = () => {
        navigate('/Description')

    }
    const [likes, setLikes] = useState(0);
    const handleLike = () => {
        setLikes(likes + 1);

    }
    const [dislikes, setDislikes] = useState(0);
    const handleDislike = () => {
        setDislikes(dislikes + 1);
    }


    return (
        <div className="bg-gray-300 h-screen ">
            <div className="w-[50%] m-auto  p-[20px] ">
                <div className=" flex justify-between">
                    <div className="text-[30px] font-bold mt-[5px]">Blogs</div>
                    <div className="bg-blue-900 rounded-lg m-2 p-1 cursor-pointer text-white" onClick={gotoDesciption}><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>Create new post</div>
                </div>
                <div className="mt-[10px] text-[15px]">Publish your passion your way...</div>
                <hr className="border-black mt-2"></hr>

                <div className="bg-gray-200 px-[20px] shadow-2xl rounded-sm mt-[10px]">
                    <div className="text-[23px] pt-[10px] font-bold">Hello  World</div>
                    <div>
                        <spam className="font-bold">Created By</spam>
                        <spam className="text-gray-500"><em>ishwari kanase@gmail.com</em></spam>
                        <hr></hr>
                        <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            <div>
                                <button className="bg-green-700 px-[10px]  mb-[20px] mt-[10px] py-[2px] rounded-md text-white" onClick={handleLike}><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> {likes}</button>
                                <button className="bg-yellow-300  px-[10px] py-[2px] rounded-md ml-[10px] text-white" onClick={handleDislike} ><i class="fa fa-thumbs-o-down" aria-hidden="true"></i>{dislikes}</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Info;