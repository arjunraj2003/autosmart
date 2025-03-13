import React from 'react'
import { DownIcon } from '../../../icons'
const DropDownR = () => {
    return (
        <div className="w-[292px] h-[52px] flex p-[3px] bg-white border border-[#E4E4E4] rounded-lg shadow-sm hover:border-[#E14026] focus:outline-none ">
            <div className="w-[248px] h-full  flex flex-col p-[2px] gap-[3px] justify-between ">
                <div className="text-[14px] text-[#212121] leading-[18px] font-medium">2024 Jan - 2024 Dec</div>
                <div className="flex gap-[8px]">
                    <div className="text-[12px] text-[#E14026] rounded-[4px] flex items-center leading-[16px] p-[3px] max-h bg-[#FCECEA]">7 Problems</div>
                    <div className="text-[12px] text-[#ED8F22] rounded-[4px] flex items-center leading-[16px] p-[3px] max-h bg-[#FFECD6]">Not Submited</div>
                </div>

            </div>
            <div className="w-[44px] h-full flex items-center justify-center">
                <DownIcon size={24} color="#E14026" className="w-8 h-8" />
            </div>
        </div>
    )
}

export default DropDownR
