
import Nav from '../components/Nav/Nav'
import Categories from '../Categories'
import Card from '../components/Card'
import { food_items } from '../food'
import { useContext } from 'react'
import { dataContext } from '../context/UserContext'
import { RxCross2 } from 'react-icons/rx'
import { useSelector } from 'react-redux'
import Card2 from '../components/Card2'
import { toast } from 'react-toastify'



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

  const subTotal = items.reduce((total, item) => total + item.qty * item.price, 0);
  let deliveryFee = 20;
  let taxes = subTotal * 0.5 / 100;
  let total = Math.floor(subTotal + deliveryFee + taxes)

  // ============ ==================

  return (
    <div className='bg-slate-200 w-full min-h-screen'>
      <Nav />
      {
        !input ? <div className='flex flex-wrap justify-center items-center gap-5 w-full'>
          {
            Categories.map((item) => {
              return (
                <div
                  key={item.id}
                  className='w-[150px] h-[140px] bg-white flex flex-col  
                items-start justify-start gap-5 p-5 text-xl font-semibold text-gray-600 rounded-lg 
                shadow-xl cursor-pointer hover:bg-green-200 transition-all duration-200'
                  onClick={() => filter(item.name)}>
                  {item.icon}
                  {item.name}
                </div>
              )
            })
          }

        </div> : null
      }
      {/* ============= map =============== */}
      <div className='w-full flex justify-center items-center flex-wrap gap-5 px-5 py-8'>

        {
          cate.length > 1 ?
            cate.map((item) => (

              <Card name={item.food_name} image={item.food_image} price={item.price} id={item.id}
                type={item.food_type} key={item.id} />
            ))
            : <div className='text-green-500 text-center text-3xl font-semibold' > Not  Dish Found </div>
        }
      </div>
      {/* =================== for  Order items ========================= */}
      <div
        className={`w-full md:w-[40vw] h-full fixed top-0 right-0 bg-white shadow-2xl 
    p-6 transition-all duration-700  ease-in-out
    ${showCart ? "translate-x-0" : "translate-x-full"} 
    flex flex-col overflow-y-auto rounded-l-2xl`}
      >
        {/* ===== Header ===== */}
        <header className='w-full flex justify-between items-center mb-6  top-0 bg-white z-10 border-b
          pb-3'>
          <span className='text-green-500 text-xl font-semibold'>Order Items</span>
          <RxCross2
            className='w-7 h-7 text-green-500 cursor-pointer hover:text-green-600 transition'
            onClick={() => setShowCart(false)}
          />
        </header>
        {
          items.length > 0 ? <>
            {/* ===== Items list ===== */}
            <div className='flex flex-col gap-6'>
              {items.map(item => (
                <Card2
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  id={item.id}
                  qty={item.qty}
                />
              ))}
            </div>

            {/* ===== Price summary ===== */}
            <div className="border-t-2 border-b-2 border-gray-200 mt-8 flex flex-col gap-3 p-5">
              <div className='flex justify-between text-gray-600 font-semibold'>
                <span>Sub Total</span>
                <span className='text-green-600'>Tk {subTotal} /-</span>
              </div>
              <div className='flex justify-between text-gray-600 font-semibold'>
                <span>Delivery Fee</span>
                <span className='text-green-600'>Tk {deliveryFee} /-</span>
              </div>
              <div className='flex justify-between text-gray-600 font-semibold'>
                <span>Taxes</span>
                <span className='text-green-600'>Tk {taxes} /-</span>
              </div>
            </div>

            {/* ===== Total + Button ===== */}
            <div className='mt-6 flex flex-col items-center gap-4'>
              <div className='w-full flex justify-between items-center'>
                <span className='text-2xl font-semibold text-gray-700'>Total</span>
                <span className='text-lg font-semibold text-green-600'>Tk {total} /-</span>
              </div>

              <button
                className='w-[80%] rounded-lg bg-green-500 py-3 text-white font-semibold
              hover:bg-green-400 transition-all shadow-md' onClick={() => {
                  toast.success("Confiremed Order")
                }}>
                Place Order
              </button>

            </div>
          </> : <div className='text-green-500 text-center text-3xl font-semibold'>  Empty Cart </div>
        }

      </div>


    </div>
  )
}

export default Home