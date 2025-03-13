import React, { useState } from "react";
import Dropdown from "./components/Dropdown";

import { Back, BackIcon2, DownIcon, ExpandIcon, NextIcon, NextIcon2, CircleCheck, SearchIcon, WifiIcon, CiCircleRemove } from "../../icons";


const ActionPlanTracker = () => {
    const [selectedProgram, setSelectedProgram] = useState("Program");
    const [selectedLocation, setSelectedLocation] = useState("Location");
    const [selectedDepartment, setSelectedDepartment] = useState("Department");
    const [selectedSection, setSelectedSection] = useState("Section");
    const [selectedCenter, setSelectedCenter] = useState("Al Naseem Center(TH)");
    const [Period, setPeriod] = useState("2024 Jan-2024 Dec");
    

    const data = [
        { question: "Is the fog machine functioning correctly?", cycle: [true, true, false, true, false, true] },
        { question: "Is it well-maintained and free from clogs or leaks?", cycle: [true, false, true, false, true, true] },
        { question: "Is the fog machine functioning correctly?", cycle: [true, true, false, true, false, true] },
    ];

    return (
        <div className=" h-[764px] flex flex-col p-[16px_24px] gap-4 border border-gray-300 rounded-lg bg-[#FCFCFC]">
            <div className=" flex h-[68px] flex gap-[12px] border border-[#E4E4E4] rounded-[12px] p-[12px] bg-white">
                <div className="flex items-center justify-center gap-[10px] w-[44px] rounded-lg border border-gray-300 bg-[#FFCCC5]">
                    <WifiIcon color="red" />
                </div>
                <div className="h-[44px] justify-center  flex flex-col gap-[4px]">
                    <p className="h-[24px] justify-center font-inter font-medium text-[18px] leading-[24px] tracking-[-0.005em]">
                        Action Plan Tracker
                    </p>
                    <p className="h-[16px] font-inter font-normal text-[12px] leading-[16px] tracking-[0em]  flex text-[#84838A] items-center">
                        Lorem Ipsum
                    </p>

                </div>
            </div>

            <div className=" h-[648px] flex flex-col gap-[32px] border border-[#E4E4E4] bg-[#FFFFFF] rounded-[12px] p-[16px] shadow-[0px_10px_16px_0px_#0000000A]">
                <div className=" h-[104px] flex flex-col gap-[12px]">
                    <div className="flex h-[52px] justify-between">
                        <div className="w-[596px] ">
                            <div className="flex h-[52px] gap-3">
                                <Dropdown
                                    label={Period}
                                    options={["Center A", "Center B"]}
                                    setSelected={setPeriod}
                                    className="w-[292px] h-[52px] flex gap-[8px] border border-gray-300 rounded-[8px] p-[8px]"
                                />
                                <Dropdown
                                    label={selectedCenter}
                                    options={["Al Naseem Center(TH)", "Center 1","Center 2"]}
                                    setSelected={setSelectedCenter}
                                    className="w-[292px] h-[52px] flex gap-[8px] border border-gray-300 rounded-[8px] p-[8px]"
                                />
                            </div>
                        </div>
                        <div className="flex-1 "></div>
                    </div>
                    <div className="flex h-[40px] justify-between ">
                        {/* Left Section with 4 Dropdowns */}
                        <div className="w-[596px]   flex gap-3">
                            <Dropdown
                                label={selectedProgram}
                                options={["Program A", "program B"]}
                                setSelected={setSelectedProgram}
                                className="w-[140px] h-[40px] flex justify-between items-center border border-[#F1F1F1] rounded-[8px] p-[8px_8px_8px_10px]"
                            />
                            <Dropdown
                                label={selectedLocation}
                                options={["Location 1", "Location 2"]}
                                setSelected={setSelectedLocation}
                                className="w-[140px] h-[40px] flex justify-between items-center border border-[#F1F1F1] rounded-[8px] p-[8px_8px_8px_10px]"
                            />
                            <Dropdown
                                label={selectedDepartment}
                                options={["Category 1", "Category 2"]}
                                setSelected={setSelectedDepartment}
                                className="w-[140px] h-[40px] flex justify-between items-center border border-[#F1F1F1] rounded-[8px] p-[8px_8px_8px_10px]"
                            />
                            <Dropdown
                                label={selectedSection}
                                options={["Section X", "Section Y"]}
                                setSelected={setSelectedSection}
                                className="w-[140px] h-[40px] flex justify-between items-center border border-[#F1F1F1] rounded-[8px] p-[8px_8px_8px_10px]"
                            />
                        </div>

                        {/* Right Section */}
                        <div className="flex-1  flex justify-end">
                            <div className="w-[140px] h-[40px] flex gap-[8px] border border-[#F1F1F1] rounded-[8px] p-[12px_10px] items-center">
                                <div><SearchIcon color="red" className=" w-[16px] h-[16px] " /></div>
                                <input type="text" placeholder="Search" className="font-inter font-normal text-[12px] leading-[16px] tracking-[0%]   outline-none" />
                            </div>
                        </div>

                    </div>
                </div>


                <div className=" h-[408px] border border-[#E4E4E4] rounded-[12px]">
                    <table className="w-full  border-collapse border border-[#E4E4E4] rounded-xl">
                        <thead className="h-[42px] justify-center rounded-xl items-center">
                            <tr className="bg-[#F6F6F6] rounded-xl font-inter font-normal text-[12px] text-[#212121] leading-[150%] tracking-[-0.5%]">
                                <th className="p-[12px] flex h-[42px] gap-[8px] items-center"><label>Question</label> <ExpandIcon size={18} style={{ color: "#84838A" }} /></th>
                                {[...Array(6)].map((_, i) => (
                                    <th key={i} className="justify-center item-center p-[12px]"><label className="flex gap-[8px]">Cycle {i + 1} - 2024 <ExpandIcon size={16} style={{ color: "#84838A" }} /></label></th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, index) => (
                                <tr key={index} className="border-t hover:bg-gray-100 transition">
                                    <td className="font-inter font-medium text-[14px] flex leading-[18px] p-[5px] tracking-[-0.5px] text-[#212121]"><ExpandIcon color="red" size={16}/>{row.question}</td>
                                    {row.cycle.map((status, i) => (
                                        <td key={i} className="p-3 justify-center item-center">
                                            {status ? <CircleCheck color="green" className="h-[24px] w-[24px]" size={24} /> : <CiCircleRemove color="red " size={24}/>}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="flex h-[40px] rounded-lg justify-between">
                    <div className="flex flex-1 gap-[8px]">
                        <button className="w-[32px] h-[32px]c border border-[#F1F1F1]  p-[5px]  rounded-lg"><BackIcon2 size={16} /></button>
                        <button className="w-[32px] h-[32px]c border border-[#F1F1F1] p-[5px] rounded-lg"><Back size={16} /></button>
                        <button className="w-[32px] h-[32px]c border border-[#F1F1F1] p-[5px] rounded-lg">1</button>
                        <button className="w-[32px] h-[32px]c border border-[#F1F1F1] p-[5px] rounded-lg">2</button>
                        <button className="w-[32px] h-[32px]c  p-[5px] rounded-lg">...</button>
                        <button className="w-[32px] h-[32px]c border border-[#F1F1F1] p-[5px] rounded-lg">10</button>
                        <button className="w-[32px] h-[32px]c border border-[#F1F1F1] p-[5px] rounded-lg"><NextIcon size={16} /></button>
                        <button className="w-[32px] h-[32px]c border border-[#F1F1F1] p-[5px] rounded-lg"><NextIcon2 size={16} /></button>
                    </div>
                    <div className="flex flex-1 gap-[8px] justify-end">
                        <p className="items-center justify-center p-[5px]">Showing 1 to 10 of 1253 Center</p>
                        <button className="w-[64px] h-[32px]c flex gap-[8px] border border-[#F1F1F1] p-[5px] rounded-lg"><label>10</label><DownIcon size={16 } className="items-center justify-center"  /></button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ActionPlanTracker;
