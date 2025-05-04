import React, { useState } from 'react'
import AlgoEditorpage from './AlgoEditorpage.jsx'
import AlgoInputpage from './AlgoInputpage.jsx'
import langs from '../../../languages.json'
import { ArrowLeft02Icon, Copy01Icon } from 'hugeicons-react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function AlgoToCodepage() {

    const [selecteLang, setselecteLang] = useState("cpp")
    const [initialCode, setinitialCode] = useState("// Code Will Display Here....")
    const [inputval, setinputval] = useState("Enter Your Algorithm Here....")

    const navigate = useNavigate();
    const Naviagte = () => {
        navigate("/")
    }

    const copyInputText = () => {
        navigator.clipboard.writeText(initialCode);
    }


    const sendalgobackend = async () => {
        try {
            const res = await axios.post("https://sketchcodebackend.onrender.com/algorecieve", {
                algo: inputval,
                language: selecteLang
            })

            if (res.data) {
                setinitialCode(res.data.data || "Not Found");
            }
        } catch (error) {
            console.log("❌ Not Sent Successfully", error);
        }
    }

    return (
        <div className='h-[100vh] w-full grid grid-cols-2 gap-[.5rem] box-border'>
            <div className='flex flex-col gap-1 h-[100%]  ml-1'>
                <div className='relative flex justify-center items-center h-[8%] bg-[#c7c7c7] text-white rounded-[10px]'>
                    <ArrowLeft02Icon
                        onClick={Naviagte}
                        className='absolute left-[5px] cursor-pointer size-[2rem] pl-1 pr-1 hover:bg-gray-200 rounded-[8px]'
                        color="black" />

                    <h1 className='font-bold text-2xl'>Write Algorithm Here </h1>
                </div>
                <div className='h-[100%] pb-2 pr-2 rounded-2xl'>
                    <AlgoInputpage
                        inputval={inputval}
                        setinputval={setinputval}
                    />
                </div>
            </div>



            <div className='flex flex-col gap-1 h-[100%]'>
                <div className='w-[100%] h-[8%] bg-[#5050500d] rounded-[10px]'>

                    <div className='rounded-lg p-2 flex justify-between'>
                        <select
                            name="Language"
                            id="lang-select"
                            value={selecteLang}
                            onChange={(e) => setselecteLang(e.target.value)}
                            className='cursor-pointer w-[30%] p-2 rounded-md border border-gray-300 focus:outline-none '
                        >
                            {
                                langs.map((lang, key) => {
                                    return (
                                        <option key={key} value={lang}>{lang}</option>
                                    )
                                })
                            }

                        </select>

                        <div className='flex gap-[2rem]'>
                            <button
                                onClick={copyInputText}
                                className='cursor-pointer hover:bg-gray-200 pl-[.5rem] pr-[.5rem] rounded-[10px]' > <Copy01Icon color="#000" />
                            </button>
                            <button
                                onClick={sendalgobackend}
                                className="cursor-pointer flex items-center justify-center gap-2 font-semibold text-white bg-blue-500 focus:outline-none hover:scale-[1.05] active:scale-[0.98]  rounded-full px-6 py-2 shadow-lg transition-all duration-300 ease-in-out"> Run
                            </button>
                        </div>

                    </div>

                </div>
                <div className='h-[100%] pb-2 pr-2'>
                    <AlgoEditorpage
                        setinitialCode={setinitialCode}
                        copyInputText={copyInputText}
                        initialCode={initialCode}
                        selecteLang={selecteLang}
                    />
                </div>
            </div>
        </div>
    )
}
