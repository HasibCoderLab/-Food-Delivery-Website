import React from 'react'
import img from "../assets/image1.avif"
import { RiDeleteBin6Line } from 'react-icons/ri'

const Card2 = () => {
    return (
        <div className='w-full h-[120px]  p-2 shadow-lg flex justify-between'>
            <div className='w-[60%] h-full   flex gap-5'>
                <div className='w-[60%] h-full overflow-hidden rounded-lg'>
                    <img src={img} alt="" className='object-cover' />
                </div>

                <div
                    className='w-[40%] h-full flex flex-col gap-5'>
                    <div
                        className='text-lg font-semibold text-gray-600'>PaneCake
                    </div>

                    {/* ========================= btn , span========================= */}
                    <div
                        className='w-[110px] h-[50px]  bg-slate-400 flex overflow-hidden rounded-lg 
                     shadow-lg font-semibold border-2  border-green-400 text-xl'>

                        <button
                            className='w-[30%] h-full text-green-400 bg-white flex 
                        justify-center items-center hover:bg-gray-200 cursor-pointer ' > - </button>
                        <span
                            className='w-[40%] h-full text-green-400  bg-slate-200  flex justify-center items-center '>1</span>
                        <button
                            className='w-[30%] h-full text-green-400 bg-white flex 
                        justify-center items-center hover:bg-gray-200 cursor-pointer' > + </button>

                    </div>
                </div>
            </div>
            {/* ====================== Right Side ==================== */}
            <div className='flex flex-col justify-start items-end gap-6'>
                <span className='text-xl font-semibold text-green-400'> Tk 499  /- </span>
                <RiDeleteBin6Line className='w-[30px] h-[30px]  text-red-400  cursor-pointer' />
            </div>
        </div>
    )
}

export default Card2