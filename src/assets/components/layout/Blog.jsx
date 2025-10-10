import { useState } from "react"
import SingleBlock from "./SingleBlock";
import { useNavigate } from "react-router-dom";
export default function Blog(){
    const Blogs =[
        {image:"/img/b1.jpg",day:"18",month:"NOV",},
        {image:"/img/b2.jpg",day:"23",month:"JAN",},
        {image:"/img/b3.jpg",day:"18",month:"NOV",}
    ]
    // const[openBlock,setOpenBlock]=useState(false);
    // const handleOpenBlock =()=>{
    //     setOpenBlock(true);
    // }
    // const handleCloseBlock =()=>{
    //     setOpenBlock(false);
    // }
    const navtigate = useNavigate();
    return<>

        <div className="hidden w-[1320px] mx-auto sm:flex flex-col items-center mt-[80px]">
            <p className="uppercase text-[#00B207]">Blog</p>
            <p className="text-[40px] font-semibold">Latest News</p>
            <div className="flex justify-center gap-6 w-[68,65%] mt-[43px]">
                {Blogs.map((blog,index)=>(
                    <div onClick={()=>navtigate("/viewBlog")} className="border-2 w-[32%] rounded-[8px] cursor-pointer" key={index}>
                        <div className="relative ">
                            <img className="w-full object-cover" src={blog.image} alt="" />
                            <div className="px-[15px] pt-[10px] pb-[6px] absolute bottom-6 left-6 bg-white rounded-xl flex flex-col items-center">
                                <p className="text-[20px] font-medium">{blog.day}</p>
                                <p className="text-[12px] text-[#808080] font-medium">{blog.month}</p>
                            </div>
                        </div>
                        <div className="flex gap-4 pl-6 pt-6">
                            <div className="flex gap-1 items-center">
                                <img className="w-[20px] h-[20px]" src="\img\tag.svg" alt="" />
                                <p className="text-[#4D4D4D]">Food</p>
                            </div>
                            <div className="flex gap-1 items-center">
                                <img className="w-[20px] h-[20px]" src="\img\user1.svg" alt="" />
                                <p className="text-[#4D4D4D]">By Admin</p>
                            </div>
                            <div className="flex gap-1 items-center">
                                <img className="w-[20px] h-[20px]" src="\img\chat.svg" alt="" />
                                <p className="text-[#4D4D4D]">65 Comments</p>
                            </div>
                        </div>
                        <p className="w-[376px] pl-6 pt-2 text-[18px] font-medium text-[#2C742F] pb-6">Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.</p>
                    </div>
                ))}
            </div>
        </div>
    </>
}