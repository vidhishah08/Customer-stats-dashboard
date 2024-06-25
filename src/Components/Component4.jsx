import React from "react";
import Dots from "../Image/more.png"
import Chart from "../Image/chart1.png"
import Frame from "../Image/Frame.png"

const Component4=()=>{
    return(
        <div className="bg-customBlack px-[20px] py-[20px] mx-[20px] w-[460px] ml-[1040px] mt-[-1010px] rounded-lg">
            <div className="flex flex-row justify-between">
                <p className="font-bold text-[20px] text-white">Customer Stats</p>
                <img src={Dots} alt="Dots" className="h-[20px] pt-[3px]"/>
            </div>
            <img src={Chart} alt="Chart" className="w-[250px] mt-[20px] ml-[90px]"/>
            <div className="text-center mt-[-150px] ">
                <p className="text-white font-bold text-[28px]">1.732</p>
                <p className="text-[#809FB8] text-[20px]">Customers</p>
            </div>
            <div className="mt-[80px] text-center">
                <img src={Frame} alt="Frame" className="ml-[10px] pt-[30px] pb-[15px]"/>
            </div>
        </div>
    );
}

export default Component4