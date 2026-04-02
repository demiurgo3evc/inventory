import { useNavigate } from "react-router-dom";
import { findAll } from "../api/daily";
import Modal from "../components/History/Modal";
import { useQuery } from "@tanstack/react-query"
import { formatDate, formatNumber } from "../utils";

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Book from '../asset/lottie/Book.json'

export default function HistoryView() {

    const navigate = useNavigate()

    const { data, isError, isLoading, error } = useQuery({
        queryKey: ["dailyAll"],
        queryFn: () => findAll(),
        retry: false
    })

    if (isError) {
        return (<p>{error.message}</p>)
    }

    if (isLoading) {
        return (<p>Cargando...</p>)
    }

    if (data) return (
        <>

            <div className='px-4   '>
                <h1 className='text-[#FFF] font-bold text-2xl'>Todos los días registrados</h1>

                {data.length <= 0 ?

                    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center ">
                        <DotLottieReact
                            src="/Order History.lottie"
                            loop
                            autoplay
                            className='w-80 h-80'
                        />

                    </div>

                    :
                    <ul className='mt-6 space-y-4' >

                        {data.map((item) => (
                            <li key={item.id} onClick={() => navigate(`?dailyId=${item.id}`)} className='flex justify-between bg-[#1F2937] p-2 rounded-lg' >
                                <div>
                                    <p className='font-bold'>{formatDate(item.date)}</p>
                                    <span className='text-xs'>{item.qtyMade} producidas · {item.wereLeft} sobraron</span>
                                </div>

                                <div>
                                    <p className='text-green-500'>{formatNumber(item.netIncome)}</p>
                                    <span className='text-xs'>{item.qtySold} vendidas</span>
                                </div>

                            </li>

                        ))}
                    </ul>
                }

                <Modal />

            </div>

        </>
    )
}