import type { TDaily } from "../../types"
import { formatNumber } from "../../utils"

type SummaryProps={
    data:TDaily
}


export default function Summary({data}:SummaryProps) {
    
    return (
        <div>
            <ul>
                <li>
                    <div className='flex justify-between border-b py-1'>
                        <p>Producidas</p>
                        <p className="font-bold">{data.qtyMade} und.</p>
                    </div>
                </li>
                <li>
                    <div className='flex justify-between border-b py-1'>
                        <p>Vendidas</p>
                        <p className="font-bold">{data.qtySold} und.</p>
                    </div>
                </li>
                <li>
                    <div className='flex justify-between border-b py-1'>
                        <p>Sobraron</p>
                        <p className="font-bold">{data.wereLeft} und.</p>
                    </div>
                </li>
            </ul>
            <div className="h-1.5 bg-gradient-to-r from-transparent via-[#FF8559] to-transparent my-4"></div>
            <ul>
                <li>
                    <div className='flex justify-between border-b py-1'>
                        <p>Ventas</p>
                        <p className="font-bold">{formatNumber(data.sold)}</p>
                    </div>
                </li>
                <li>
                    <div className='flex justify-between border-b py-1'>
                        <p>- Ingredientes</p>
                        <p className="text-red-500">{formatNumber(data.ingredientCost)}</p>
                    </div>
                </li>
                <li>
                    <div className='flex justify-between border-b py-1'>
                        <p>- Cuota</p>
                        <p className="text-red-500">{formatNumber(data.dailyFee)}</p>
                    </div>
                </li>

                <div className='flex justify-between py-1'>
                    <p>Ganancia neta</p>
                    <p className="text-green-500">{formatNumber(data.netIncome)}</p>
                </div>

            </ul>
        </div>
    )
}
