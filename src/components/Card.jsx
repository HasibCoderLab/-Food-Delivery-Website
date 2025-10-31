import React from 'react'
import { LuLeafyGreen } from "react-icons/lu";

import image1 from "../assets/image1.avif"
const Card = () => {
    return (
        <div className='w-[280px]'>
            <div>
                <img src={image1} alt="pancakes" /></div>
            <div>pancakes </div>
           
            <div>
                <div>Tk 299/-</div>
                <div><LuLeafyGreen /> <span> Veg</span></div>
                
            </div>
        </div>
    )
}

export default Card