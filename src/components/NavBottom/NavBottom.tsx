import { NavLink } from "react-router-dom";
import { FaWpforms } from "react-icons/fa";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { BsFileBarGraphFill } from "react-icons/bs";
import { GiBookmark } from "react-icons/gi";

export default function NavBottom() {
    return (
        <nav className="bg-[#101720] fixed bottom-0 flex justify-between  w-full px-6 py-4 border-t">
            <div className="">
                <NavLink to={"/"} className={({ isActive }) => `${isActive ? 'text-[#FF8559] border-b border-b-[#FF8559] group' : ''} flex flex-col items-center justify-center gap-2 text-xl`}>
                    <FaWpforms className="text-4xl" />
                    <span className="text-white">Diario</span>
                </NavLink>
            </div>

            <div className="">
                <NavLink to={"/history"} className={({ isActive }) => `${isActive ? 'text-[#FF8559] border-b border-b-[#FF8559] group' : ''} flex flex-col items-center justify-center gap-2 text-xl`}>
                    <GiBookmark className="text-4xl" />
                    <span className="text-white">Historial</span>
                </NavLink>
            </div>

            <div className="flex flex-col items-center justify-center gap-2">

                <NavLink to={"/monthly"} className={({ isActive }) => `${isActive ? 'text-[#FF8559] border-b border-b-[#FF8559] group' : ''} flex flex-col items-center justify-center gap-2 text-xl`}>
                    <MdOutlineCalendarMonth className="text-4xl" />
                    <span className="text-white"> Mensual</span>
                </NavLink>

            </div>

            <div className="flex flex-col items-center justify-center gap-2">
                <NavLink to={"/compare"} className={({ isActive }) => `${isActive ? 'text-[#FF8559] border-b border-b-[#FF8559] group' : ''} flex flex-col items-center justify-center gap-2 text-xl`}>
                    <BsFileBarGraphFill className="text-4xl" />
                    <span className="text-white">Compare</span>
                </NavLink>
            </div>

        </nav>
    )
}