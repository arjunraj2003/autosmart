import React, { useState } from "react";
import { Down, Up } from "../../../icons";
import Vector from "../../../assets/Vector.png";

const Dropdown = ({ label, options, selected, setSelected }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative w-full">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full h-full text-[12px] font-inter flex justify-between items-center p-[8px_8px_8px_10px] bg-white border border-[#E4E4E4] rounded-lg"
            >
                <span>{selected || label}</span>
                {isOpen ? <Up
                    size={18}
                    className="font-normal"
                    color="#E14026"
                />
                    : <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 7.5L10 12.5L5 7.5" stroke="#E14026" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                }
            </button>

            {isOpen && (
                <div className="absolute mt-2 w-full bg-white border border-[#E4E4E4] rounded-lg  overflow-hidden z-10">
                    {options.map((option, index) => (
                        <div
                            key={index}
                            onClick={() => {
                                setSelected(option);
                                setIsOpen(false);
                            }}
                            className="px-4 py-2 flex justify-between items-center hover:bg-gray-100 cursor-pointer"
                        >
                            <span>{option}</span>
                            {selected === option && <Check size={16} className="" />}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
