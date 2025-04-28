function Home(){
    return(
        <div className="bg-gray-300 h-screen ">
            <div className="w-[50%] m-auto  bg-gray-100 shadow-xl p-[20px] ">
                <div className="text-[28px] font-bold mb-[5px]">Blogs !</div>
                <div>Publish Your passion,Your way..</div>
                <hr className="border-1 mt-2 border-gray-500"></hr>
                <button className="bg-blue-900 text-white mr-[10px] mt-[20px] px-[12px] py-[6px] rounded-lg">Login</button>
                <button className="bg-blue-900 text-white   mt-[20px] px-[12px] py-[6px] rounded-lg">Register</button>
            </div>
        </div>
    )
}

export default Home;