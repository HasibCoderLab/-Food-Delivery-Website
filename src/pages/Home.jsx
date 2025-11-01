
import Nav from '../components/Nav/Nav'
import Categories from '../Categories'
import Card from '../components/Card'
import { food_items } from '../food'
import { useContext } from 'react'
import { dataContext } from '../context/UserContext'
import { RxCross2 } from 'react-icons/rx'
import { useSelector } from 'react-redux'
import Card2 from '../components/Card2'



const Home = () => {
  // ============ useState , Function ==================
  let { cate, setCate, input, showCart, setShowCart } = useContext(dataContext)

  function filter(category) {
    if (category === "All") {
      setCate(food_items)
    } else {
      let newList = food_items.filter((item) => (item.food_category === category));
      setCate(newList);
    }

  }

  const items = useSelector(state => state.cart);


  // ============ ==================

  return (
    <div className='bg-slate-200 w-full min-h-screen'>
      <Nav />
      {
        !input ? <div className='flex flex-wrap justify-center items-center gap-5 w-full'>
          {
            Categories.map((item) => {
              return <div className='w-[150px] h-[140px] bg-white flex flex-col  items-start justify-start gap-5 p-5 text-xl font-semibold text-gray-600 rounded-lg shadow-xl cursor-pointer hover:bg-green-200 transition-all duration-200'
                onClick={() => filter(item.name)}>
                {item.icon}
                {item.name}

              </div>
            })
          }
        </div> : null
      }
      {/* ============= map =============== */}
      <div className='w-full flex justify-center items-center flex-wrap gap-5 px-5 py-8'>

        {
          cate.map((item) => (

            <Card name={item.food_name} image={item.food_image} price={item.price} id={item.id}
              type={item.food_type} key={item.id} />
          ))
        }
      </div>
      {/* =================== for  Order items ========================= */}
      <div
        className={`w-full md:w-[40vw] h-1/1 fixed top-0 right-0 bg-white shadow-xl p-6  transition-all duration-600
                  ${showCart ? "translate-x-0" : "translate-x-full"}`}>
        <header
          className='w-full flex justify-between items-center  ' >
          <span
            className='text-green-400 text-[20px] font-semibold'>Oder Items
          </span>
          <RxCross2
            className=' w-8 h-8 text-green-400 text-[20px] font-semibold cursor-pointer'
            onClick={() => setShowCart(false)} />
        </header>
        {/* ============= Side Card ============= */}
        <div className='w-full mt-9 flex flex-col  gap-8'>
          {
            items.map(item => (
              <Card2
                key={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                id={item.id}
                qty={item.qty}
              />
            ))
          }

        </div>
        {/* ============== Side Cartd [Price] ================= */}
        <div className="w-full border-t-2 border-gray-400 mt-8 "></div>

      </div>
    </div>
  )
}

export default Home