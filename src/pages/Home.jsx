import React from 'react'
import Nav from '../components/Nav/Nav'
import Categories from '../Categories'

const Home = () => {
  return (
    <div className='bg-slate-200 w-full min-h-screen'>        
        <Nav/>
        {
            Categories.map()
        }
    </div>
  )
}

export default Home