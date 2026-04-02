export default function FormCalculator() {
    return (
        <div className="bg-[#111827] rounded-2xl p-4 border border-[#374151]">

            <div className="flex justify-between items-center mb-4">
                <input
                    className="flex-1 bg-transparent border-none text-white text-base font-medium outline-none placeholder-[#4B5563]"
                    placeholder="Nombre del ingrediente"
                />
                <button className="del-btn">×</button>
            </div>

            <div className="grid grid-cols-3 gap-3">
                <div className="flex flex-col gap-1">
                    <label className="text-[11px] text-[#6B7280]">Cantidad</label>
                    <input
                        type="number"
                        placeholder="0"
                        className="bg-[#1F2937] border border-[#374151] rounded-lg py-2 px-3 text-[#FF8559] text-sm text-center outline-none focus:border-[#FF8559]"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-[11px] text-[#6B7280]">Unidad</label>
                    <input
                        type="text"
                        placeholder="kg, lb..."
                        className="bg-[#1F2937] border border-[#374151] rounded-lg py-2 px-3 text-[#F3F4F6] text-sm text-center outline-none focus:border-[#FF8559]"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-[11px] text-[#6B7280]">Precio $</label>
                    <input
                        type="number"
                        placeholder="0"
                        className="bg-[#1F2937] border border-[#374151] rounded-lg py-2 px-3 text-[#FF8559] text-sm text-center outline-none focus:border-[#FF8559]"
                    />
                </div>
            </div>

            <div className="flex justify-end items-center gap-2 mt-3 pt-3 border-t border-[#374151]">
                <span className="text-xs text-[#6B7280]">Subtotal</span>
                <strong className="text-base text-[#10B981]">$ 0</strong>
            </div>

        </div>
    )
}
