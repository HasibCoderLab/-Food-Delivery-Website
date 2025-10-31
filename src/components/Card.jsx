    import React from 'react'
    import { LuLeafyGreen } from "react-icons/lu";

    import image1 from "../assets/image1.avif"
    const Card = () => {
        return (
            <div className='w-[300px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3'>
                <div className='w-full h-[60%] overflow-hidden rounded-lg'>
                    <img src={image1} alt="pancakes" className='object-cover' />
                </div>
                <div className='text-2xl font-semibold'>pancakes </div>

                <div className='w-full flex justify-between  items-center'>
                    <div className='text-lg font-bold text-green-500'>Tk 299/-</div>
                    <div className=' flex justify-center items-center gap-2 text-green-500 text-xl font-semibold' >
                        <LuLeafyGreen />
                        <span> Veg</span>
                    </div>

                </div>
                <button></button>
            </div>
        )
    }

    export default Card