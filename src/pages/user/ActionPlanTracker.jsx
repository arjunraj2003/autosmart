import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
import { Back, BackIcon2, DownIcon, ExpandIcon, NextIcon, NextIcon2, CircleCheck, SearchIcon, WifiIcon, CiCircleRemove, Check, CancelIcon } from "../../icons";
import DropDownMain from "./components/DropDownMain";
import DropDownR from "./components/DropDownR";
import WifiSquare from "../../assets/wifi-square.png"


const ActionPlanTracker = () => {
    const [selectedProgram, setSelectedProgram] = useState("Program");
    const [selectedLocation, setSelectedLocation] = useState("Location");
    const [selectedDepartment, setSelectedDepartment] = useState("Department");
    const [selectedSection, setSelectedSection] = useState("Section");
    const [selectedCenter, setSelectedCenter] = useState("Al Naseem Center(TH)");
    const [Period, setPeriod] = useState("2024 Jan-2024 Dec");


    const data = [
        {
            question: "Is the fog machine functioning correctly?",
            code: "Q1234",
            cycle: [true, true, false, true, false, true],
            subquestions: []
        },
        {
            question: "Is the fog machine functioning correctly?",
            code: "Q1234",
            cycle: [true, true, false, true, false, true],
            subquestions: [
                { text: "Is it well-maintained and free from clogs or leaks?", statuses: [true, false, true, true, false, true] },
                { text: "Is it well-maintained and free from clogs or leaks?", statuses: [true, true, false, true, true, true] },
                { text: "Is it well-maintained and free from clogs or leaks?", statuses: [true, false, true, true, false, true] },
                { text: "Is it well-maintained and free from clogs or leaks?", statuses: [true, true, false, true, false, true] },
            ]
        },
        {
            question: "Is the fog machine functioning correctly?",
            code: "Q1234",
            cycle: [true, true, false, true, false, true],
            subquestions: []
        }
    ];

    return (
        <div className=" h-[764px] flex flex-col p-[16px_24px] gap-4 border border-gray-300 rounded-lg bg-[#FCFCFC]">
            <div className=" flex h-[68px] flex gap-[12px] border border-[#E4E4E4] rounded-[12px] p-[12px] bg-[#FFFFFF] shadow-[0px_10px_16px_0px_#0000000A]">
                <div className="flex items-center justify-center gap-[10px] w-[44px] rounded-lg border border-gray-300 bg-[#FFCCC5]">
                    <img src={WifiSquare} className="w-[19.9px] h-[20px]" alt="" />
                </div>
                <div className="h-[44px] justify-center  flex flex-col gap-[4px]">
                    <p className="h-[24px] justify-center font-inter font-medium text-[18px] leading-[24px] text-[#212121] tracking-[-0.005em]">
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
                                <DropDownMain />
                                <DropDownR />
                            </div>
                        </div>
                        <div className="flex-1 "></div>
                    </div>
                    <div className="flex h-[40px] justify-between ">
                        <div className="w-[596px]   flex gap-3">
                            <Dropdown
                                label={selectedProgram}
                                options={["Program A", "program B"]}
                                setSelected={setSelectedProgram}
                                className="w-[140px] h-[40px] text-[12px] flex justify-between items-center bg-[#FFFFFF] border border-[#F1F1F1] rounded-[8px] p-[8px_8px_8px_10px]"
                            />
                            <Dropdown
                                label={selectedLocation}
                                options={["Location 1", "Location 2"]}
                                setSelected={setSelectedLocation}
                                className="w-[140px] h-[40px] text-[12px] flex justify-between items-center bg-[#FFFFFF] border border-[#F1F1F1] rounded-[8px] p-[8px_8px_8px_10px]"
                            />
                            <Dropdown
                                label={selectedDepartment}
                                options={["Category 1", "Category 2"]}
                                setSelected={setSelectedDepartment}
                                className="w-[140px] h-[40px] text-[12px] flex justify-between items-center bg-[#FFFFFF] border border-[#F1F1F1] rounded-[8px] p-[8px_8px_8px_10px]"
                            />
                            <Dropdown
                                label={selectedSection}
                                options={["Section X", "Section Y"]}
                                setSelected={setSelectedSection}
                                className="w-[140px] h-[40px] text-[12px] flex justify-between items-center bg-[#FFFFFF] border border-[#F1F1F1] rounded-[8px] p-[8px_8px_8px_10px]"
                            />
                        </div>
                        <div className="flex-1  flex justify-end">
                            <div className="w-[140px] h-[40px] flex gap-[8px] border border-[#F1F1F1] rounded-[8px] p-[12px_10px] items-center">
                                <div><SearchIcon color="red" className=" w-[18px] h-[18px] " /></div>
                                <input type="text" placeholder="Search" className="font-inter font-normal text-[12px] leading-[16px] tracking-[0%]   outline-none" />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="border border-[#E4E4E4] rounded-[12px]  overflow-hidden">
                    <table className="w-full h-full border-collapse border border-[#E4E4E4] text-[12px] text-[#212121]">
                        <thead className="h-[36px] bg-[#F6F6F6] font-inter text-[12px] font-normal text-[#212121] leading-[150%] tracking-[-0.5%]">
                            <tr>
                                <th className="p-[12px] gap-[8px] text-left border-y border-[#E4E4E4]">
                                    <div className="flex items-center gap-[6px]">
                                        <label>Question</label>
                                        <ExpandIcon size={16} className="text-[#84838A]" />
                                    </div>
                                </th>
                                {[...Array(6)].map((_, i) => (
                                    <th key={i} className="p-[12px] gap-[8px] text-center border-y border-[#E4E4E4]">
                                        <div className="flex justify-center items-center min-w-fit ">
                                            <label className="text-[12px]">Cycle {i + 1} - 2024</label>
                                            <ExpandIcon size={16} className="text-[#84838A]" />
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, index) => {
                                const isLastRow = index === data.length - 1;
                                return (
                                    <React.Fragment key={index}>
                                        <tr
                                            className={`hover:bg-gray-100 transition ${isLastRow ? "border-t border-b border-[#E4E4E4]" : "border-b border-[#E4E4E4]"
                                                }`}
                                        >
                                            <td className="p-[12px] gap-[8px]">
                                                <div className="flex min-w-[600px] items-center gap-[6px]">
                                                    <ExpandIcon
                                                        color="red"
                                                        className="border border-red-200 rounded-[4px] bg-[#FCECEA]"
                                                        size={16}
                                                    />
                                                    <div className="flex flex-col">
                                                        <span className="font-medium text-[14px] text-[#212121] leading-[16px] tracking-[-0.5px]">
                                                            {row.question}
                                                        </span>
                                                        <span className="text-[#84838A] text-[12px]">{row.code}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            {row.cycle.map((status, i) => (
                                                <td key={i} className="h-[50px] text-center">
                                                    <div className="flex justify-center">
                                                        {status ? <CircleCheck color="green" size={20} /> : <CiCircleRemove color="red" size={20} />}
                                                    </div>
                                                </td>
                                            ))}
                                        </tr>
                                        {row.subquestions.map((subQ, subIndex) => (
                                            <tr key={`${index}-${subIndex}`} className="">
                                                <td className="p-[12px] gap-[8px] pl-[30px] text-[14px] text-[#84838A]">{subQ.text}</td>
                                                {subQ.statuses.map((status, i) => (
                                                    <td key={i} className="p-[10px] text-center">
                                                        <div className="flex justify-center">
                                                            {status ? <Check color="green" size={20} /> : <CancelIcon color="red" size={20} />}
                                                        </div>
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </React.Fragment>
                                );
                            })}
                        </tbody>
                    </table>
                </div>





                <div className="flex h-[40px] rounded-lg justify-between">
                    <div className="flex flex-1 gap-[8px]">
                        <button className="w-[32px] h-[32px]c border border-[#F1F1F1]  p-[5px]  rounded-lg"><BackIcon2 size={16} /></button>
                        <button className="w-[32px] h-[32px]c border border-[#F1F1F1] p-[5px] rounded-lg"><Back size={16} /></button>
                        <button className="w-[32px] h-[32px]c border border-red-300 bg-[#FCECEA] p-[5px] rounded-lg text-[#E14026]">1</button>
                        <button className="w-[32px] h-[32px]c border border-[#F1F1F1] p-[5px] rounded-lg">2</button>
                        <button className="w-[32px] h-[32px]c  p-[5px] rounded-lg">...</button>
                        <button className="w-[32px] h-[32px]c border border-[#F1F1F1] p-[5px] rounded-lg">10</button>
                        <button className="w-[32px] h-[32px]c border border-[#F1F1F1] p-[5px] rounded-lg"><NextIcon size={16} /></button>
                        <button className="w-[32px] h-[32px]c border border-[#F1F1F1] p-[5px] rounded-lg"><NextIcon2 size={16} /></button>
                    </div>
                    <div className="flex flex-1 gap-[8px] justify-end">
                        <p className="items-center justify-center p-[5px]">Showing 1 to 10 of 1253 Center</p>
                        <button className="w-[64px] h-[32px]c flex gap-[8px] border border-[#F1F1F1] p-[5px] rounded-lg"><label>10</label><DownIcon size={24} className="items-center flex justify-center" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActionPlanTracker;
