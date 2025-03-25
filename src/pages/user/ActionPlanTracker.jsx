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
        <div className=" h-screen flex flex-col p-[16px_24px] gap-4 bg-[#FCFCFC]">
            <div className=" flex  flex gap-[12px] border border-[#E4E4E4] rounded-[12px] p-[12px] bg-[#FFFFFF] shadow-[0px_10px_16px_0px_#0000000A]">
                <div className="flex items-center justify-center gap-[10px] w-[44px] rounded-lg border border-gray-300 bg-[#FFCCC5]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM14.79 16.6C14.64 16.79 14.42 16.89 14.2 16.89C14.04 16.89 13.88 16.84 13.74 16.73C12.68 15.91 11.31 15.91 10.25 16.73C9.92 16.98 9.45 16.92 9.2 16.6C8.95 16.27 9.01 15.8 9.33 15.55C10.92 14.32 13.06 14.32 14.65 15.55C14.99 15.8 15.05 16.27 14.79 16.6ZM17 13.51C16.85 13.7 16.63 13.8 16.41 13.8C16.25 13.8 16.09 13.75 15.95 13.64C13.55 11.79 10.46 11.79 8.06 13.64C7.73 13.9 7.26 13.84 7 13.51C6.74 13.18 6.81 12.71 7.13 12.46C10.08 10.18 13.9 10.18 16.85 12.46C17.19 12.71 17.25 13.18 17 13.51ZM18.59 10.42C18.44 10.61 18.22 10.71 18 10.71C17.84 10.71 17.68 10.66 17.54 10.55C14.17 7.95 9.82 7.95 6.46 10.55C6.13 10.8 5.66 10.74 5.41 10.42C5.16 10.09 5.22 9.62 5.54 9.37C9.46 6.34 14.53 6.34 18.46 9.37C18.79 9.62 18.85 10.09 18.59 10.42Z" fill="#E14026" />
                    </svg>

                </div>
                <div className=" justify-center  flex flex-col gap-[4px]">
                    <p className=" justify-center font-inter font-medium text-[18px] leading-[24px] text-[#212121] tracking-[-0.005em]">
                        Action Plan Tracker
                    </p>
                    <p className=" font-inter font-normal text-[12px] leading-[16px] tracking-[0em]  flex text-[#84838A] items-center">
                        Lorem Ipsum
                    </p>

                </div>
            </div>
            <div className=" flex flex-col gap-[32px] border border-[#E4E4E4] bg-[#FFFFFF] rounded-[12px] p-[16px] shadow-[0px_10px_16px_0px_#0000000A]">
                <div className=" flex flex-col gap-[12px]">
                    <div className="flex justify-between">
                        <div className="w-[596px] ">
                            <div className="flex gap-3">
                                <DropDownMain />
                                <DropDownR />
                            </div>
                        </div>
                        <div className="flex-1 "></div>
                    </div>
                    <div className="flex justify-between ">
                        <div className="w-[596px]   flex gap-3">
                            <Dropdown
                                label={selectedProgram}
                                options={["Program A", "program B"]}
                                setSelected={setSelectedProgram}
                                className="w-[140px]  text-[12px] flex justify-between items-center bg-[#FFFFFF] border border-[#F1F1F1] rounded-[8px] p-[8px_8px_8px_10px]"
                            />
                            <Dropdown
                                label={selectedLocation}
                                options={["Location 1", "Location 2"]}
                                setSelected={setSelectedLocation}
                                className="w-[140px] text-[12px] flex justify-between items-center bg-[#FFFFFF] border border-[#F1F1F1] rounded-[8px] p-[8px_8px_8px_10px]"
                            />
                            <Dropdown
                                label={selectedDepartment}
                                options={["Category 1", "Category 2"]}
                                setSelected={setSelectedDepartment}
                                className="w-[140px] text-[12px] flex justify-between items-center bg-[#FFFFFF] border border-[#F1F1F1] rounded-[8px] p-[8px_8px_8px_10px]"
                            />
                            <Dropdown
                                label={selectedSection}
                                options={["Section X", "Section Y"]}
                                setSelected={setSelectedSection}
                                className="w-[140px] text-[12px] flex justify-between items-center bg-[#FFFFFF] border border-[#F1F1F1] rounded-[8px] p-[8px_8px_8px_10px]"
                            />
                        </div>
                        <div className="flex-1  flex justify-end">
                            <div className="w-[140px]  flex gap-[8px] border border-[#F1F1F1] rounded-[8px] p-[12px_10px] items-center">
                                <div><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.66671 14C11.1645 14 14 11.1645 14 7.66668C14 4.16887 11.1645 1.33334 7.66671 1.33334C4.1689 1.33334 1.33337 4.16887 1.33337 7.66668C1.33337 11.1645 4.1689 14 7.66671 14Z" stroke="#E14026" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M14.6667 14.6667L13.3334 13.3333" stroke="#E14026" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                </div>
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
                                        <label className="font-inter text-[12px] font-normal" >Question</label>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.8067 6.47332C11.8692 6.41135 11.9188 6.33761 11.9526 6.25637C11.9864 6.17514 12.0039 6.088 12.0039 5.99999C12.0039 5.91198 11.9864 5.82484 11.9526 5.74361C11.9188 5.66237 11.8692 5.58863 11.8067 5.52666L8.47334 2.19332C8.41136 2.13084 8.33763 2.08124 8.25639 2.0474C8.17515 2.01355 8.08801 1.99612 8 1.99612C7.91199 1.99612 7.82486 2.01355 7.74362 2.0474C7.66238 2.08124 7.58864 2.13084 7.52667 2.19332L4.19334 5.52666C4.13085 5.58863 4.08125 5.66237 4.04741 5.74361C4.01356 5.82484 3.99614 5.91198 3.99614 5.99999C3.99614 6.088 4.01356 6.17513 4.04741 6.25637C4.08125 6.33761 4.13085 6.41135 4.19334 6.47332C4.25531 6.53581 4.32904 6.5854 4.41028 6.61925C4.49152 6.6531 4.57866 6.67052 4.66667 6.67052C4.75468 6.67052 4.84181 6.6531 4.92305 6.61925C5.00429 6.5854 5.07803 6.53581 5.14 6.47332L8 3.60666L10.86 6.47332C10.922 6.53581 10.9957 6.5854 11.077 6.61925C11.1582 6.6531 11.2453 6.67052 11.3333 6.67052C11.4213 6.67052 11.5085 6.6531 11.5897 6.61925C11.671 6.5854 11.7447 6.53581 11.8067 6.47332ZM8.47334 13.8067L11.8067 10.4733C11.8688 10.4112 11.9181 10.3374 11.9518 10.2562C11.9854 10.1749 12.0027 10.0879 12.0027 9.99999C12.0027 9.82246 11.9322 9.65219 11.8067 9.52666C11.7445 9.4645 11.6707 9.41519 11.5895 9.38155C11.5083 9.34791 11.4212 9.3306 11.3333 9.3306C11.1558 9.3306 10.9855 9.40112 10.86 9.52666L8 12.3933L5.14 9.52666C5.07803 9.46417 5.00429 9.41457 4.92305 9.38073C4.84181 9.34688 4.75468 9.32946 4.66667 9.32946C4.57866 9.32946 4.49152 9.34688 4.41028 9.38073C4.32904 9.41457 4.25531 9.46417 4.19334 9.52666C4.13085 9.58863 4.08125 9.66237 4.04741 9.74361C4.01356 9.82484 3.99614 9.91198 3.99614 9.99999C3.99614 10.088 4.01356 10.1751 4.04741 10.2564C4.08125 10.3376 4.13085 10.4113 4.19334 10.4733L7.52667 13.8067C7.58864 13.8691 7.66238 13.9187 7.74362 13.9526C7.82486 13.9864 7.91199 14.0039 8 14.0039C8.08801 14.0039 8.17515 13.9864 8.25639 13.9526C8.33763 13.9187 8.41136 13.8691 8.47334 13.8067Z" fill="#84838A" />
                                        </svg>

                                    </div>
                                </th>
                                {[...Array(6)].map((_, i) => (
                                    <th key={i} className="p-[12px] font-inter gap-[8px] text-center border-y border-[#E4E4E4]">
                                        <div className="flex justify-center gap-[4px] items-center min-w-fit ">
                                            <label className="text-[12px] font-normal">Cycle {i + 1} - 2024</label>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.8067 6.47332C11.8692 6.41135 11.9188 6.33761 11.9526 6.25637C11.9864 6.17514 12.0039 6.088 12.0039 5.99999C12.0039 5.91198 11.9864 5.82484 11.9526 5.74361C11.9188 5.66237 11.8692 5.58863 11.8067 5.52666L8.47334 2.19332C8.41136 2.13084 8.33763 2.08124 8.25639 2.0474C8.17515 2.01355 8.08801 1.99612 8 1.99612C7.91199 1.99612 7.82486 2.01355 7.74362 2.0474C7.66238 2.08124 7.58864 2.13084 7.52667 2.19332L4.19334 5.52666C4.13085 5.58863 4.08125 5.66237 4.04741 5.74361C4.01356 5.82484 3.99614 5.91198 3.99614 5.99999C3.99614 6.088 4.01356 6.17513 4.04741 6.25637C4.08125 6.33761 4.13085 6.41135 4.19334 6.47332C4.25531 6.53581 4.32904 6.5854 4.41028 6.61925C4.49152 6.6531 4.57866 6.67052 4.66667 6.67052C4.75468 6.67052 4.84181 6.6531 4.92305 6.61925C5.00429 6.5854 5.07803 6.53581 5.14 6.47332L8 3.60666L10.86 6.47332C10.922 6.53581 10.9957 6.5854 11.077 6.61925C11.1582 6.6531 11.2453 6.67052 11.3333 6.67052C11.4213 6.67052 11.5085 6.6531 11.5897 6.61925C11.671 6.5854 11.7447 6.53581 11.8067 6.47332ZM8.47334 13.8067L11.8067 10.4733C11.8688 10.4112 11.9181 10.3374 11.9518 10.2562C11.9854 10.1749 12.0027 10.0879 12.0027 9.99999C12.0027 9.82246 11.9322 9.65219 11.8067 9.52666C11.7445 9.4645 11.6707 9.41519 11.5895 9.38155C11.5083 9.34791 11.4212 9.3306 11.3333 9.3306C11.1558 9.3306 10.9855 9.40112 10.86 9.52666L8 12.3933L5.14 9.52666C5.07803 9.46417 5.00429 9.41457 4.92305 9.38073C4.84181 9.34688 4.75468 9.32946 4.66667 9.32946C4.57866 9.32946 4.49152 9.34688 4.41028 9.38073C4.32904 9.41457 4.25531 9.46417 4.19334 9.52666C4.13085 9.58863 4.08125 9.66237 4.04741 9.74361C4.01356 9.82484 3.99614 9.91198 3.99614 9.99999C3.99614 10.088 4.01356 10.1751 4.04741 10.2564C4.08125 10.3376 4.13085 10.4113 4.19334 10.4733L7.52667 13.8067C7.58864 13.8691 7.66238 13.9187 7.74362 13.9526C7.82486 13.9864 7.91199 14.0039 8 14.0039C8.08801 14.0039 8.17515 13.9864 8.25639 13.9526C8.33763 13.9187 8.41136 13.8691 8.47334 13.8067Z" fill="#84838A" />
                                            </svg>

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
                                            <td className="">
                                                <div className="flex p-[12px] gap-[8px]">
                                                    <div>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path opacity="0.1" d="M2 7.81L2 16.19C2 19.83 4.17 22 7.81 22L16.18 22C19.83 22 22 19.83 22 16.19L22 7.82C22 4.18 19.83 2.01 16.19 2.01L7.81 2.01C4.17 2 2 4.17 2 7.81Z" fill="#E14026" />
                                                        <path d="M16.28 10.74C16.28 10.93 16.21 11.12 16.06 11.27L12.53 14.8C12.24 15.09 11.76 15.09 11.47 14.8L7.94 11.27C7.65 10.98 7.65 10.5 7.94 10.21C8.23 9.91999 8.71 9.91999 9 10.21L12 13.21L15 10.21C15.29 9.91999 15.77 9.91999 16.06 10.21C16.21 10.35 16.28 10.54 16.28 10.74Z" fill="#E14026" />
                                                    </svg>
                                                    </div>
                                                
                                                    <div className="flex flex-col gap-[10px]">
                                                        <span className="font-medium text-[14px] text-[#212121] leading-[16px] tracking-[-0.5px]">
                                                            {row.question}
                                                        </span>
                                                        <span className="text-[#84838A] font-normal text-[12px]">{row.code}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            {row.cycle.map((status, i) => (
                                                <td key={i} className="h-[50px] text-center">
                                                    <div className="flex justify-center">
                                                        {status ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path opacity="0.2" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#3F9A26" />
                                                            <path d="M10.58 15.58C10.38 15.58 10.19 15.5 10.05 15.36L7.22 12.53C6.93 12.24 6.93 11.76 7.22 11.47C7.51 11.18 7.99 11.18 8.28 11.47L10.58 13.77L15.72 8.63001C16.01 8.34001 16.49 8.34001 16.78 8.63001C17.07 8.92001 17.07 9.40001 16.78 9.69001L11.11 15.36C10.97 15.5 10.78 15.58 10.58 15.58Z" fill="#3F9A26" />
                                                        </svg>
                                                            : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path opacity="0.2" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#E14026" />
                                                                <path d="M13.06 12L15.36 9.69998C15.65 9.40998 15.65 8.92999 15.36 8.63999C15.07 8.34999 14.59 8.34999 14.3 8.63999L12 10.94L9.69998 8.63999C9.40998 8.34999 8.92999 8.34999 8.63999 8.63999C8.34999 8.92999 8.34999 9.40998 8.63999 9.69998L10.94 12L8.63999 14.3C8.34999 14.59 8.34999 15.07 8.63999 15.36C8.78999 15.51 8.97999 15.58 9.16999 15.58C9.35999 15.58 9.54998 15.51 9.69998 15.36L12 13.06L14.3 15.36C14.45 15.51 14.64 15.58 14.83 15.58C15.02 15.58 15.21 15.51 15.36 15.36C15.65 15.07 15.65 14.59 15.36 14.3L13.06 12Z" fill="#E14026" />
                                                            </svg>
                                                        }
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
                                                            {status ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M5.4375 12.9375L9.8125 17.3125L18.5625 7.9375" stroke="#3F9A26" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                                : <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M14.0625 5.9375L5.9375 14.0625M5.9375 5.9375L14.0625 14.0625" stroke="#E14026" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                            }
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





                <div className="flex rounded-lg justify-between">
                    <div className="flex flex-1 gap-[8px]">
                        <button className="w-[32px] h-[32px]c border border-[#F1F1F1]  p-[5px]  rounded-lg"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.7267 12L12.6667 11.06L9.61333 8L12.6667 4.94L11.7267 4L7.72667 8L11.7267 12Z" fill="#212121" />
                            <path d="M7.33332 12L8.27332 11.06L5.21998 8L8.27331 4.94L7.33331 4L3.33332 8L7.33332 12Z" fill="#212121" />
                        </svg>
                        </button>
                        <button className="w-[32px] h-[32px]c border border-[#F1F1F1] p-[5px] rounded-lg"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.06 12L11 11.06L7.94667 8L11 4.94L10.06 4L6.06 8L10.06 12Z" fill="#212121" />
                        </svg>
                        </button>
                        <button className="w-[32px] h-[32px]c border border-red-300 bg-[#FCECEA] p-[5px] rounded-lg text-[#E14026]">1</button>
                        <button className="w-[32px] h-[32px]c border border-[#F1F1F1] p-[5px] rounded-lg">2</button>
                        <button className="w-[32px] h-[32px]c  p-[5px] rounded-lg">...</button>
                        <button className="w-[32px] h-[32px]c border border-[#F1F1F1] p-[5px] rounded-lg">10</button>
                        <button className="w-[32px] h-[32px]c border border-[#F1F1F1] p-[5px] rounded-lg"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.94 4L6 4.94L9.05333 8L6 11.06L6.94 12L10.94 8L6.94 4Z" fill="#212121" />
                        </svg>
                        </button>
                        <button className="w-[32px] h-[32px]c border border-[#F1F1F1] p-[5px] rounded-lg"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.27334 4L3.33334 4.94L6.38668 8L3.33334 11.06L4.27334 12L8.27334 8L4.27334 4Z" fill="#212121" />
                            <path d="M8.66665 4L7.72665 4.94L10.78 8L7.72665 11.06L8.66665 12L12.6667 8L8.66665 4Z" fill="#212121" />
                        </svg>
                        </button>
                    </div>
                    <div className="flex flex-1 gap-[8px] justify-end">
                        <p className="items-center justify-center p-[5px]">Showing 1 to 10 of 1253 Center</p>
                        <button className="w-[64px] h-[32px]c flex gap-[8px] border border-[#F1F1F1] p-[5px] rounded-lg"><label>10</label><svg width="20" className="items-center flex justify-center" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 7.5L10 12.5L5 7.5" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActionPlanTracker;
