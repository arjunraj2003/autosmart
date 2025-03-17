import React from 'react'
import { DownIcon } from '../../../icons'
const DropDownR = () => {
    return (
        <div className="w-[292px] h-[52px] flex gap-[8px] rounded-[8px] border border-[#E4E4E4] p-[8px] bg-[#FFFFFF] font-inter font-normal leading-[12px] tracking-[-0.5px] align-bottom">
            <div className="w-[248px] h-full  gap-[4px] rounded-[4px] flex flex-col  ">
                <div className="w-[132px] h-[16px] text-[12px] font-inter text-[#212121] leading-[18px] font-medium">2024 Jan - 2024 Dec</div>
                <div className="w-[150px] h-[16px] flex gap-[8px]">
                    <div className=" h-[16px] text-[10px] font-inter font-normal text-[#E14026] rounded-[3px] flex items-center leading-[16px] p-[4px] gap-[10px] bg-[#FCECEA]">7 Problems</div>
                    <div className=" h-[16px] text-[10px] font-inter font-normal text-[#ED8F22] rounded-[3px] flex items-center leading-[16px] p-[4px] gap-[10px] bg-[#FFECD6]">Not Submited</div>
                </div>

            </div>
            <div className="w-[44px] h-full flex items-center justify-center">
                <DownIcon size={24} color="#E14026" className="w-8 h-8" />
            </div>
        </div>
    )
}

export default DropDownR
