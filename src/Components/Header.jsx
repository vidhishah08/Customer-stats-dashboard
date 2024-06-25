import React from "react";
import Logo from "../Image/logo.png"
import icon from "../Image/icon_button.png"
import Avatar from "../Image/Avatar.png"
import Arrow from "../Image/arrows.png"
import Arrow1 from "../Image/icon_stroke.png"

const Header=()=>{
    return(
        <div className="bg-customBlack">
            <div className="flex flex-row border-b-white/10 border-b-[1px]">
                <div className="">
                    <img src={Logo} alt="Logo" className="pl-[20px] py-[15px]"/>
                </div>
                <div className="flex flex-row text-[16px] text-[#809FB8] my-[20px] justify-between mr-[230px]">
                    <button className="bg-[#2AB6F2] bg-opacity-30 text-[#2AB6F2] py-[8px] px-[20px] rounded-xl mr-[10px]">Home</button>
                    <button className="py-[8px] px-[30px]">About</button>
                    <button className="py-[8px] px-[30px]">Portfolio</button>
                    <button className="py-[8px] px-[30px]">Projects</button>
                    <button className="py-[8px] px-[30px]">Reports</button>
                    <button className="py-[8px] px-[30px]">Statements</button>
                </div>
                <div className="flex flex-row">
                    <div className="border-r-black border-[1px] my-[15px] px-[30px] pt-[7px] border-transparent "><img src={icon} alt="icon" className="w-[28px]"/></div>
                    <div className="flex flex-row">
                        <div className="ml-[30px]"><img src={Avatar} alt="Avatar" className="w-[45px] pt-[15px]"/></div>
                        <div className="ml-[20px] mt-[12px]">
                            <p className="text-[18px] text-white font-semibold">John Reads</p>
                            <p className="text-[#809FB8] text-[12px] ">Administrator</p>
                        </div>
                        <div className="mt-[15px] ml-[20px]">
                            <button className=""><img src={Arrow} alt="arrow"/></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row py-[20px] text-[#809FB8] text-[20px] ml-[25px]">
                <p className="pr-[40px]">Dashboard</p>
                <div className="mr-[40px] pt-[9px]"><img src={Arrow1} alt="arrow1"/></div>
                <p className="pr-[40px]">Market</p>
                <div className="mr-[40px] pt-[9px]"><img src={Arrow1} alt="arrow1"/></div>
                <p className="pr-[40px]">Analysis</p>
                <div className="mr-[40px] pt-[9px]"><img src={Arrow1} alt="arrow1"/></div>
                <p className="text-white">Product</p>
            </div>
        </div>
    );
}

export default Header;
