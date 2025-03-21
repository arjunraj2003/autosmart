import React from 'react'
import { DownIcon } from '../../../icons'
import Vector from "../../../assets/Vector.png";
const DropDownR = () => {
    return (
        <div className="w-[292px]  flex gap-[8px] rounded-[8px] border border-[#E4E4E4] p-[8px] bg-[#FFFFFF] font-inter font-normal leading-[12px] tracking-[-0.5px] align-bottom">
            <div className="w-[248px] h-full  gap-[4px] rounded-[4px] flex flex-col  ">
                <div className="w-[132px] h-[16px] text-[12px] font-inter text-[#212121] leading-[18px] font-medium">2024 Jan - 2024 Dec</div>
                <div className="w-[150px] h-[16px] flex gap-[8px]">
                    <div className=" h-[16px] text-[10px] font-inter font-normal text-[#E14026] rounded-[3px] flex items-center leading-[16px] p-[4px] gap-[10px] bg-[#FCECEA]">7 Problems</div>
                    <div className=" h-[16px] text-[10px] font-inter font-normal text-[#ED8F22] rounded-[3px] flex items-center leading-[16px] p-[4px] gap-[10px] bg-[#FFECD6]">Not Submited</div>
                </div>

            </div>
            <div className="w-[44px] h-full flex items-center justify-end">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 7.5L10 12.5L5 7.5" stroke="#E14026" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

            </div>
        </div>
    )
}

export default DropDownR
