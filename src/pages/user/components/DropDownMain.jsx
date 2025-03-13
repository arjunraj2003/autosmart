import React from 'react'
import { DownIcon } from '../../../icons'

const DropDownMain = () => {
    return (
        <div className="w-[292px] h-[52px]  p-[3px] flex justify-between bg-white border border-[#E4E4E4] rounded-lg shadow-sm hover:border-[#E14026] focus:outline-none ">
            <div className="w-[248px] h-full p-[2px] gap-[3px] flex flex-col justify-between ">
                <div className="text-[14px] text-[#212121] leading-[18px] font-medium">2024 Jan - 2024 Dec</div>
                <div className="text-[12px] text-[#3F9A26] rounded-[4px] flex items-center leading-[16px] p-[3px] max-h w-[50px] bg-[#D7EECA]">Running</div>
            </div>
            <div className="flex-1 h-full flex items-center justify-center">
                <DownIcon size={24} color="#E14026" className="w-8 h-8" />
            </div>
        </div>


    )
}

export default DropDownMain
