import { NavLink } from "react-router-dom";
import { FaWpforms } from "react-icons/fa";
import { GiBookmark } from "react-icons/gi";
import { MdOutlineCalendarMonth } from "react-icons/md";



export default function NavBottom() {
    return (
        <nav className="bg-[#101720] fixed bottom-0 flex justify-between  w-full px-6 py-4 shadow-xl border-t-2 border-t-[#FF8559] shadow-[red]">


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
                {/* <NavLink to="/history">
                    {({ isActive }) => (
                        <div className={`flex flex-col items-center justify-center gap-2 text-xl ${isActive ? 'text-[#FF8559]' : ''}`}>

                            {isActive ? <GiBookmarklet className={`text-4xl text-white`}/> : <GiBookmark className={`text-4xl ${isActive ? 'text-[#FF8559]' : 'text-white'}`} />}

                            <span className={isActive ? 'text-[#FF8559]' : 'text-white'}>
                                Historial
                            </span>

                        </div>
                    )}
                </NavLink> */}
            </div>



            {/* <div className="flex flex-col items-center justify-center gap-2">

                <NavLink to={"/monthly"} className={({ isActive }) => `${isActive ? 'text-[#FF8559] border-b border-b-[#FF8559] group' : ''} flex flex-col items-center justify-center gap-2 text-xl`}>
                    <MdOutlineCalendarMonth className="text-4xl" />
                    <span className="text-white"> Mensual</span>
                </NavLink>

            </div> */}



            {/* <Calculator /> */}

            {/* <div className="flex flex-col items-center justify-center gap-2">
                <NavLink to={"/compare"} className={({ isActive }) => `${isActive ? 'text-[#FF8559] border-b border-b-[#FF8559] group' : ''} flex flex-col items-center justify-center gap-2 text-xl`}>
                    <BsFileBarGraphFill className="text-4xl" />
                    <span className="text-white">Compare</span>
                </NavLink>
            </div> */}

        </nav>
    )
}