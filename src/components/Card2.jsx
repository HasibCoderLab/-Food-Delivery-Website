import React from 'react'
import img from "../assets/image1.avif"

const Card2 = () => {
    return (
        <div className='w-full h-[120px]  p-2 shadow-lg'>
            <div className='w-[60%] h-full   flex gap-5'>
                <div className='w-[60%] h-full overflow-hidden rounded-lg'>
                    <img src={img} alt="" className='object-cover' />
                </div>

                <div 
                className='w-[40%] h-full flex flex-col gap-5'>
                    <div 
                    className='text-lg font-semibold text-gray-600'>PaneCake</div>

                    <div 
                    className='w-[110px] h-[50px]  bg-slate-400 flex overflow-hidden rounded-lg 
                    shadow-lg font-semibold border-2  border-green-400 text-xl'>

                        <button 
                        className='w-[30%] h-full text-green-400 bg-white flex justify-center items-center ' > - </button>
                        <span 
                        className='w-[40%] h-full text-green-400  bg-slate-200  flex justify-center items-center '>1</span>
                        <button 
                        className='w-[30%] h-full text-green-400 bg-white flex justify-center items-center ' > + </button>

                        </div>
                </div>
            </div>

            <div>

            </div>

        </div>
    )
}

export default Card2