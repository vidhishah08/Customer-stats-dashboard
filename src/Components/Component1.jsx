import React from "react";
import Lightning from "../Image/lightning.png"

const Component1=()=>{
    return(
        <div className=" bg-[#17181A] px-[25px] py-[20px] flex flex-row justify-between">
            <p className="text-[32px] font-semibold text-white">Welcome Back, John Reads</p>
            <button className="bg-[#2AB6F2] text-black flex flex-row py-[10px] px-[15px] rounded-lg"><img src={Lightning} alt="li" className="mr-[10px] pt-[2px]"/><h1>Upgrade plan</h1></button>
        </div>
    );
}
export default Component1;