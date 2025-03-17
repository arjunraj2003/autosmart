import React from 'react'
import { DownIcon } from '../../../icons'
import Vector from "../../../assets/Vector.png";
const DropDownMain = () => {
    return (
        <div className="w-[292px] h-[52px] flex gap-[8px] rounded-[8px] border border-[#E4E4E4] p-[8px] bg-[#FFFFFF] font-inter font-normal leading-[12px] tracking-[-0.5px] align-bottom">
            <div className="w-[248px] h-full  gap-[4px] rounded-[4px] flex flex-col  ">
                <div className="text-[12px] w-[121px] h-[16px] font-inter text-[#212121] leading-[18px] font-medium">2024 Jan - 2024 Dec</div>
                <div className="text-[10px] w-[44px] h-[16px] font-inter text-[#3F9A26] rounded-[3px] flex items-center leading-[16px] p-[4px] gap-[10px] bg-[#D7EECA]">Running</div>
            </div>
            <div className="flex-1 h-full flex items-center justify-end">
                {/* <DownIcon size={24} color="#E14026" className="w-8 h-8" /> */}
                <img src={Vector} alt="" />
            </div>
        </div>


    )
}

export default DropDownMain
