import React from "react";
import Scale from "../Image/scale.png"
import Chart from "../Image/charts.png"
import Tooltip from "../Image/tooltip.png"
import Info from "../Image/info_icon.png"
import Legend from "../Image/legend.png"

const Component2=()=>{
    return(
        <div className=" bg-[#17181A] pb-[20px]">
            <div className="mx-[20px] bg-customBlack px-[20px] py-[20px] w-[1000px] h-[450px] rounded-lg ">
                <div className="flex flex-row mb-[50px]">
                    <div className="flex flex-row"><p className="text-[28px] font-semibold text-white ">Total Customers</p><img src={Info} alt="Info" className="w-[22px] h-[35px] ml-[20px] pt-[12px]"/></div>
                    <div><img src={Legend} alt="Legend" className="ml-[40px] mr-[20px] pt-[10px]"/></div>
                </div>
                <div><img src={Scale} alt="scale"/></div>
                <div className="mt-[-240px] w-[852px] ml-[78px]"><img src={Chart} alt=""/></div>
                <div><img src={Tooltip} alt="Tooltip" className="w-[120px] ml-[250px] mt-[-300px]"/></div>
            </div>
        </div>
    );
}

export default Component2;