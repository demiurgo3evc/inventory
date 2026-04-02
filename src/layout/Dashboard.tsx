import { Outlet } from "react-router-dom";
import NavBottom from "../components/NavBottom/NavBottom";
import { ToastContainer } from 'react-toastify'
export default function Dashboard() {

    return (
        <>

            <div className="h-screen">

                <header className="p-4">
                    <h1 className="text-[#E5E7EB] text-2xl"> 🫓 Arepas Boyacenses</h1>
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
        </>
    )

}
