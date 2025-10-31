import React from 'react'
import { LuLeafyGreen } from "react-icons/lu";

import image1 from "../assets/image1.avif"
const Card = () => {
    return (
        <div className='w-[300px] h-[400px] bg-white p-4 rounded-lg'>
            <div className='w-full h-[60%] overflow-hidden rounded-lg'>
                <img src={image1} alt="pancakes" className='object-cover' />
            </div>
            <div>pancakes </div>

            <div>
                <div>Tk 299/-</div>
                <div><LuLeafyGreen /> <span> Veg</span></div>

            </div>
        </div>
    )
}

export default Card