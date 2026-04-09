import { Link, useNavigate } from "react-router-dom";
import { IoExitOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { useAppStore } from "../../store/useAppStore";
import { useEffect, useState } from "react";
import { decodeToken, removeToken } from "../../utils/auth";

export default function Sildebar() {

    const navigate = useNavigate()
    const viewSildebar = useAppStore((state) => state.sildebar);
    const handleSildebar = useAppStore((state) => state.handleSildebar);
    const userStore = useAppStore((state) => state.user);
    const [view, setView] = useState(false);
    const [user, setUser] = useState("");
    
    useEffect(() => {
        const {username}=decodeToken()
        setUser(username)
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setView(viewSildebar)
        }, 100)
    }, [viewSildebar])

    const handleLogout = () => {

        removeToken();
        handleSildebar()
        navigate('/auth/login');
    };

    return (
        <>

            <div onClick={(e) => { e.stopPropagation() }} className={` relative ${!view ? 'w-0 transition-width  duration-100 ease-linear' : 'w-64 transition-width  duration-150 ease-linear '} bg-[#1F2937] top-0 overflow-hidden  right-0 left-0 h-screen `}>

                <div className="bg-[#FF8559] flex flex-col justify-center items-center h-32 gap-2">
                    <FaUserCircle className="text-white text-4xl bg-black rounded-full" />
                    <h1 className="text-[#1F2937] text-2xl font-bold shadow-slate-800 ">{userStore.username ?? user}</h1>
                </div>

                <nav className="p-4 ">
                    <Link to={"/"} className="flex items-center gap-2">
                        <IoSettingsOutline />
                        Ajuste
                    </Link>
                </nav>

                <div className="absolute bottom-0 h-32 flex flex-col justify-center w-full px-8">
                    <button onClick={() => handleLogout()} className="flex items-center gap-2  justify-center border rounded-xl py-1 ">
                        <span className="text-2xl"><IoExitOutline /></span>
                        Salir
                    </button>
                </div>

            </div>

        </>

    )

}