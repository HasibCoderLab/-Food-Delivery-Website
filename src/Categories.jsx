import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { CiBowlNoodles } from "react-icons/ci";
import { MdOutlineFoodBank } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";

export const Categories = [
    {
        id: 1,
        name: "All",
        icon: <TiThSmallOutline className="w-[60px] h-[60px] text-green-500" />

    },

    {
        id: 2,
        name: "Breakfast",
        icon: <MdOutlineFreeBreakfast className="w-[60px] h-[60px] text-green-500" />

    },
    {
        id: 3,
        name: "Soup",
        icon: <TbSoup className="w-[60px] h-[60px] text-green-500" />

    },
    {
        id: 4,
        name: "Noodles",
        icon: <CiBowlNoodles className="w-[60px] h-[60px] text-green-500" />

    },
    {
        id: 6,
        name: "FoodBank ",
        icon: <MdOutlineFoodBank className="w-[60px] h-[60px] text-green-500" />

    },
    {
        id: 7,
        name: "Pizza",
        icon: <GiFullPizza className="w-[60px] h-[60px] text-green-500" />

    }, {
        id: 8,
        name: "Pizza",
        icon: <GiHamburger className="w-[60px] h-[60px] text-green-500" />
    }

]

export default Categories