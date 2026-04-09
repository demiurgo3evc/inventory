import { useAppStore } from "../../store/useAppStore"
import { formatNumber } from "../../utils"


export default function DailySummary() {

    const ingredientCost = useAppStore((state) => state.production.ingredientCost)
    const dailyFee = useAppStore((state) => state.production.dailyFee)

    const wereLeft = useAppStore((state) =>
        (+state.production.qtyMade!) - (+state.production.qtySold!)
    )

    const sold = useAppStore((state) =>
        (state.production.qtySold!) * (state.production.unitPrice!)
    )

    const netIncome = useAppStore((state) => {
        const s = (state.production.qtySold!) * (state.production.unitPrice!)
        return s - (state.production.ingredientCost!) - (state.production.dailyFee!)
    })

    return (
        <div className='px-4 bg-[#1F2937]  py-4 rounded-xl'>

            <h2 className='text-2xl'>Resumen del día</h2>

            <br />

            <div className='space-y-4'>
                <div className='flex justify-between gap-4'>
                    <div className='bg-[#101720] flex flex-col gap-4 w-full px-2 py-2  rounded-lg'>
                        <h3 className='text-lg text-[#FF8559]'>Sobraron</h3>
                        <p className=' text-4xl text-center'>{isNaN(wereLeft) ? 0 : wereLeft}</p>
                    </div>
                    <div className='bg-[#101720] flex flex-col gap-4 w-full px-2 py-2  rounded-lg'>
                        <h3 className='text-lg text-[#FF8559] '>Vendido</h3>
                        <p className='text-4xl text-center'> {isNaN(sold) ? "$0.00": formatNumber(sold)}</p>
                    </div>
                </div>

                <div className='bg-[#101720] flex flex-col gap-4 w-full px-2 py-2  rounded-lg'>
                    <h3 className='text-lg text-[#FF8559]'>Ganancia Neta</h3>
                    <p className={`text-4xl ${netIncome<0? 'text-red-500': 'text-green-600'} `}>{isNaN(netIncome) ? '$0.00':formatNumber(netIncome)}</p>
                </div>

            </div>

            <br />

            <hr />

            <div>
                <ul className="space-y-2">
                    <li className="flex justify-between ">
                        <p>Venta</p>
                        <p>$ {sold}</p>
                    </li>
                    <li className="flex justify-between ">
                        <p>- Ingredientes</p>
                        <p className="text-red-500">{formatNumber(ingredientCost!)}</p>
                    </li>
                    <li className="flex justify-between ">
                        <p>- Cuota</p>
                        <p className="text-red-500">{formatNumber(dailyFee!)}</p>
                    </li>
                    <li className="flex justify-between ">
                        <h3>Ganancia Neta</h3>
                        <p className={`${netIncome<0? 'text-red-500': 'text-green-500'} `}>{formatNumber(netIncome)}</p>
                    </li>
                </ul>


            </div>

        </div>
    )
}
