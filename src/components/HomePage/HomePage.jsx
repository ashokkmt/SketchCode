import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
    return (
        <div className='relative h-screen w-full overflow-hidden'>
            <img
                className='absolute top-0 left-0 w-full h-full object-contain z-0'
                src="Home.png"
                alt="HomeImage" />

            <div className="absolute top-[60%] -translate-y-1/2 w-full flex justify-center z-10">
                <div className="flex flex-col md:flex-row gap-4 md:gap-10">
                    <Link
                        to="/FlowToCode"
                        className='text-white px-6 py-2 rounded-[10px] text-xl md:text-2xl bg-orange-400 font-medium cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out'
                    > FlowToCode </Link>
                    <Link
                        to="/AlgoToCode"
                        className='text-white px-6 py-2 rounded-[10px] text-xl md:text-2xl bg-orange-400 font-medium cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out'
                    > AlgoToCode </Link>
                </div>
            </div>
        </div>
    )
}
