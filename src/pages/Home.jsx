// import React, { useState } from 'react'
import Nav from '../components/Nav/Nav'
import Categories from '../Categories'
import Card from '../components/Card'
import { food_items } from '../food'
import { useContext } from 'react'
import { dataContext } from '../context/UserContext'


const Home = () => {
// ============ useState , Function ==================
let {cate ,setCate}= useContext(dataContext)

  function filter  (category) {
    if (category === "All") {
      setCate(food_items)
    }else{
      let newList = food_items.filter((item) => (item.food_category === category));
      setCate(newList);
    }
    
  }

// ============ ==================

  return (
    <div className='bg-slate-200 w-full min-h-screen'>        
        <Nav/>
        <div className='flex flex-wrap justify-center items-center gap-5 w-full'> 
        {
            Categories.map((item) =>{
             return   <div className='w-[150px] h-[140px] bg-white flex flex-col  items-start justify-start gap-5 p-5 text-xl font-semibold text-gray-600 rounded-lg shadow-xl cursor-pointer hover:bg-green-200 transition-all duration-200' 
             onClick={() => filter(item.name)}>
                    {item.icon}
                    {item.name}

                </div>
            })
        }
        </div>
        {/* ============= map =============== */}
        <div className='w-full flex justify-center items-center flex-wrap gap-5 px-5 py-8'>

          {
            cate.map((item) => (
              
              <Card name={item.food_name} image={item.food_image} price={item.price} id={item.id} 
              type={item.food_type} key={item.id}/>
            ))
          }
        </div>
    </div>
  )
}

export default Home