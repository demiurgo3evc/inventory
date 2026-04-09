import { Outlet } from "react-router-dom";
import NavBottom from "../components/NavBottom/NavBottom";
import { ToastContainer } from 'react-toastify'
import { FaCircleUser } from "react-icons/fa6";
import Sildebar from "../components/Sildebar/Sildebar";
import { useAppStore } from "../store/useAppStore";
import { useEffect, useState } from "react";
import { decodeToken } from "../utils/auth";

export default function Dashboard() {

    const viewSildebar = useAppStore((state) => state.sildebar);
    const handleSildebar = useAppStore((state) => state.handleSildebar);
   // const userStore = useAppStore((state) => state.user);
    const [businessName, setBusinessName] = useState("");

    useEffect(() => {
        const {businessName} = decodeToken()
        setBusinessName(businessName)
    }, [])

    return (
        <>

            <div className={`h-screen ${viewSildebar && 'overflow-hidden'}`}>

                <header className="p-4">

                    <div className="flex items-center gap-2  ">
                        <button onClick={handleSildebar}><FaCircleUser className="text-3xl" /></button>
                        <h1 className="text-[#E5E7EB] text-2xl font-bold"> {businessName}</h1>
                    </div>

                    <h3 className="text-[#FF8559] ml-10">Contabilidad del negocio</h3>

                </header>

                <main className="">
                    <Outlet />
                </main>

                <div className="py-[60px]" />

                <footer>
                    <NavBottom />
                </footer>

            </div>

            <ToastContainer
                pauseOnHover={false}
                pauseOnFocusLoss={false}
            />

            {viewSildebar &&
                <div onClick={handleSildebar} className={`fixed w-full right-0 left-0 bg-[#0000008d] top-0 z-[5000] bottom-0 h-screen `}>
                    <Sildebar />
                </div>
            }
        </>
    )

}