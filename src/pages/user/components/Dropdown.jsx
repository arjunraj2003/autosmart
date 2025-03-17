import React, { useState } from "react";
import { Down, Up } from "../../../icons";
import Vector from "../../../assets/Vector.png";

const Dropdown = ({ label, options, selected, setSelected }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative w-[292px]">
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
                    : <img src={Vector} alt="" />
                    // : <Down 
                    // size={18}
                    // className="font-normal"
                    // color="#E14026" />
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
