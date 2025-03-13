import React, { useState } from "react";
import { Down, Up } from "../../../icons";

const Dropdown = ({ label, options, selected, setSelected }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative w-[292px]">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full h-full flex justify-between items-center px-4 py-2 bg-white border border-[#E4E4E4] rounded-lg shadow-sm hover:border-[#E14026] focus:outline-none"
            >
                <span>{selected || label}</span>
                {isOpen ? <Up
                    size={18}
                    className="w-[20px] h-[20px]"
                    color="#E14026"
                />
                    : <Down 
                    size={18}
                    className="w-[20px] h-[20px] "
                    color="#E14026" />}
            </button>

            {isOpen && (
                <div className="absolute mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-10">
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
                            {selected === option && <Check size={16} className="text-green-500" />}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
