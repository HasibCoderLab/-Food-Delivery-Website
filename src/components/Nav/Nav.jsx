        import  { useContext, useEffect } from 'react'
        import { MdFastfood } from "react-icons/md";
        import { IoSearch } from "react-icons/io5";
        import { LuShoppingBag } from "react-icons/lu"
        import { food_items } from '../../food';
        import { dataContext } from '../../context/UserContext';
        import { useSelector } from 'react-redux';



        const Nav = () => {
        // ======== context , useEffect, Function,useSelector======================
            const { input, setInput, cate, setCate, showCart, setShowCart } = useContext(dataContext);

            useEffect(() => {
                const newList = food_items.filter((item) => item.food_name.includes(input)
                    || item.food_name.toLowerCase().includes(input));
                setCate(newList);
            }, [input]);
            const items = useSelector(state => state.cart);
            
        // ===============================================
            return (
                <div
                    className='  w-full h-[100px] flex justify-between items-center px-5  md:px-8 '>
                    <div
                        className='w-[60px] h-[60px]  bg-white flex justify-center items-center 
                        rounded-md shadow-xl'>
                        <MdFastfood
                            className="w-[30px] h-[30px]  text-green-500   " />
                    </div>
        {/* ============================= form ======================= */}
                    <form
                        className=' bg-white md:w-[70%] w-[40%] h-[60px] flex  items-center  px-5  gap-5 
                        rounded-xl shadow-md' onSubmit={(e) => e.preventDefault()} >
                        <IoSearch
                            className=' text-green-500 w-5 h-5' />
        {/* =======  ===================== input ======================= */}

                        <input type="text" placeholder='Search Items ...'
                            className=' w-full outline-none text-[16px] md:text-[20px]' onChange={(e) => setInput(e.target.value)} value={input} />
                    </form>

    {/* ============================= span, icon ======================= */}
                    <div
                        className=' w-[60px] h-[60px]  bg-white flex justify-center items-center 
                        rounded-md shadow-xl relative  ' onClick={() => {
                            setShowCart(true)
                        }}>

                        <span
                            className='absolute top-0 right-2 text-green-500 font-bold text-[18px]'> 
                            {items.length}
                        </span>
                        <LuShoppingBag
                            className="w-[30px] h-[30px]  text-green-500 cursor-pointer" />
                    </div>
                </div>
            )
        }

        export default Nav