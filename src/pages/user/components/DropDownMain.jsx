import React from 'react'
import { DownIcon } from '../../../icons'
import Vector from "../../../assets/Vector.png";
const DropDownMain = () => {
    return (
        <div className="w-[292px]  flex gap-[8px] rounded-[8px] border border-[#E4E4E4] p-[8px] bg-[#FFFFFF] font-inter font-normal leading-[12px] tracking-[-0.5px] align-bottom">
            <div className="w-[248px] h-full  gap-[4px] rounded-[4px] flex flex-col  ">
                <div className="text-[12px] w-[121px] h-[16px] font-inter text-[#212121] leading-[18px] font-medium">2024 Jan - 2024 Dec</div>
                <div className="text-[10px] w-[44px] h-[16px] font-inter text-[#3F9A26] rounded-[3px] flex items-center leading-[16px] p-[4px] gap-[10px] bg-[#D7EECA]">Running</div>
            </div>
            <div className="flex-1 h-full flex items-center justify-end">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 7.5L10 12.5L5 7.5" stroke="#E14026" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

            </div>
        </div>


    )
}

export default DropDownMain
