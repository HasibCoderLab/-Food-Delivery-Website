import React from 'react'
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { AddItem } from '../redux/cartSlice';



const Card = ({ name, image, id, price, type }) => {
    let disPatch =  useDispatch();
    return (
        <div
            className='w-[300px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-green-400   cursor-pointer'>

            <div
                className='w-full h-[60%] overflow-hidden rounded-lg'>
                <img src={image} alt="pancakes" className='object-cover' />
            </div>

            <div
                className='text-2xl font-semibold'>{name} </div>

            <div
                className='w-full flex justify-between  items-center'>
                <div
                    className='text-lg font-bold text-green-500'>
                    Tk {price}/-
                </div>

                <div
                    className=' flex justify-center items-center gap-2 text-green-500 text-xl    font-semibold' >
                    {
                        type === "veg" ? <LuLeafyGreen /> : <GiChickenOven />
                    }
                    <span> {type}</span>
                </div>

            </div>
            <button
                className=' w-full rounded-lg bg-green-500 p-3 text-white hover:bg-green-400
                transition-all cursor-pointer' onClick={() => disPatch(AddItem({id:id}))} >Add to dish</button>
        </div>
    )
}

export default Card