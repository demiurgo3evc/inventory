import { useState } from "react"

export default function SummaryView() {

  const [itemSeleted, setItemSeleted] = useState(0)

  return (
    <div className="px-4">
      <header className="flex justify-center gap-2 w-full">
        
        <div className="relative flex  bg-[#1F2937]   rounded-md overflow-hidden">
          <button onClick={() => setItemSeleted(0)} className="font-bold w-20 ">Semanal</button>
          <button onClick={() => setItemSeleted(1)} className="w-20">Mensual</button>
          <button onClick={() => setItemSeleted(2)} className="w-20">Anual</button>
          <span className={`absolute top-0 ${itemSeleted===0 && 'translate-x-0 duration-500' } ${itemSeleted===1 && ' translate-x-20 duration-500' } ${itemSeleted===2 && 'translate-x-40 duration-500' }  z-50  w-20 h-6 bg-[#ff85592f]`} />
        </div>

      </header>
    </div>
  )
}
