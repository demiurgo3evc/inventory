import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export default function AuthLayout() {
    return (
        <div className="space-y-8">
            <header className="p-4">
                <div className="flex items-end">
                    <h1 className="text-2xl font-black relative -bottom-1">Omni</h1><img className=" w-16" src="/logo.png" />

                </div>
            </header>



            <div className="">
                <Outlet />
            </div>

            <ToastContainer
                pauseOnHover={false}
                pauseOnFocusLoss={false}
            />

        </div>
    )
}
