import type { UseFormRegister, FieldErrors, Control, UseFormGetValues } from "react-hook-form"
import type { TProduction } from "../../types"
import { NumericFormat } from 'react-number-format';
import { Controller } from 'react-hook-form'
import { CiCalculator1 } from "react-icons/ci";
//import { useAppStore } from "../../store/useAppStore";
import ModalCalculator from "./Calculator/ModalCalculator";
import { useRef, useState } from "react";
import { VscSettings } from "react-icons/vsc";


type FormProductionProps = {
    register: UseFormRegister<TProduction>,
    errors: FieldErrors<TProduction>,
    control: Control<TProduction>,
    getValues:UseFormGetValues<TProduction>
}

export default function FormProduction({ register, control,getValues,errors }: FormProductionProps) {

    // const handleModal = useAppStore((state) => state.handleModal);
    const [editPreci, setEditPreci] = useState(false)
    const [editDate, setEditDate] = useState(false)
    const unitPriceRef = useRef<HTMLInputElement>(null)
    const dateRef = useRef<HTMLInputElement>(null)

    const adjustPrice = () => {
        setEditPreci(true)
        setTimeout(() => unitPriceRef.current?.focus(), 50)
    }

    const adjustDate = ()=> {
        
        setEditDate(true)
        setTimeout(() => dateRef.current?.focus(), 50)
    }

    return (

        <>
            <div className='flex items-center justify-between'>

                <label htmlFor="">Fecha</label>

                <div className="relative">

                    <input type="date"

                        className='text-center text-[#FF8559] w-full h-[41px] focus:outline-none focus:border px-4 border-[#FF8559]  bg-[#1F2937] rounded-md'
                        defaultValue={new Date().toISOString().split("T")[0]}
                        disabled={!editDate}
                        {...register("date", {
                            required: "Campo requerido"
                        })}
                    />
                    <button form="unitPrice" type="button" className="text-[#FF8559] absolute -top-7 right-2 " onClick={() => adjustDate()}><VscSettings className="text-2xl" /></button>

                </div>
            </div>

            <div className='space-y-2'>

                <label htmlFor="">Cantidad preparada</label>

                <div>
                    <Controller
                        name="qtyMade"
                        control={control}
                        rules={{ required: "Campo requerido" }}
                        render={({ field: { onChange, value } }) => (
                            <NumericFormat
                                thousandSeparator="."
                                decimalSeparator=","
                                decimalScale={0}
                                allowLeadingZeros={false}
                                isAllowed={(values) => {
                                    const { floatValue } = values
                                    return floatValue === undefined || floatValue > 0
                                }}
                                value={value}
                                onValueChange={(values) => onChange(values.floatValue)}
                                className='text-[#FFF] font-bold w-full h-[41px] focus:outline-none focus:border px-4 border-[#FF8559] bg-[#1F2937] rounded-md'
                            />
                        )}
                    />
                </div>
            </div>

            <div className='space-y-2'>
                <label>Cantidad Vendida</label>
                <Controller
                    name="qtySold"
                    control={control}
                    rules={{
                        required: "Campo requerido",
                        validate: (value) => {
                            const qtyMade = getValues("qtyMade")
                            if (value && qtyMade && value > qtyMade) {
                                return "No puede ser mayor a la cantidad preparada"
                            }
                            return true
                        }
                    }}
                    render={({ field: { onChange, value } }) => (
                        <NumericFormat
                            thousandSeparator="."
                            decimalSeparator=","
                            decimalScale={0}
                            allowLeadingZeros={false}
                            value={value}
                            onValueChange={(values) => onChange(values.floatValue)}
                            className='text-[#FFF] font-bold w-full h-[41px] focus:outline-none focus:border px-4 border-[#FF8559] bg-[#1F2937] rounded-md'
                        />
                    )}
                />
                {errors.qtySold &&
                    <span className="text-red-500">{errors.qtySold.message}</span>
                }
            </div>

            <div className='space-y-2 relative'>
                <label htmlFor="unitPrice">Precio producto</label>
                <Controller

                    name="unitPrice"
                    control={control}
                    rules={{ required: "Campo requerido" }}
                    render={({ field: { onChange, value } }) => (
                        <NumericFormat
                            id="unitPrice"
                            name="unitPrice"
                            prefix="$ "
                            thousandSeparator="."
                            decimalSeparator=","
                            decimalScale={2}
                            allowLeadingZeros={false}
                            // defaultValue={2000}
                            isAllowed={(values) => values.floatValue === undefined || values.floatValue >= 0}
                            value={value}
                            onValueChange={(values) => onChange(values.floatValue ?? null)}
                            className='text-[#FF8559] w-full h-[41px] focus:outline-none focus:border px-4 border-[#FF8559] bg-[#1F2937] rounded-md'
                            disabled={!editPreci}
                            getInputRef={unitPriceRef}
                        />
                    )}
                />
                <button form="unitPrice" type="button" className="text-[#FF8559] absolute -top-1 right-2 " onClick={() => adjustPrice()}><VscSettings className="text-2xl" /></button>
            </div>

            <hr className='border border-[#FF8559]' />

            <div className='space-y-2 relative'>
                <label>Ingredientes</label>
                <Controller
                    name="ingredientCost"
                    control={control}
                    rules={{ required: "Campo requerido" }}
                    render={({ field: { onChange, value } }) => (
                        <NumericFormat
                            prefix="$ "
                            thousandSeparator="."
                            decimalSeparator=","
                            decimalScale={2}
                            allowLeadingZeros={false}
                            value={value}
                            onValueChange={(values) => onChange(values.floatValue)}
                            className='text-[#FFF] w-full h-[41px] focus:outline-none focus:border px-4 border-[#FF8559] bg-[#1F2937] rounded-md'
                        />
                    )}
                />
                <button type="button" onClick={() => adjustPrice()} className="hidden absolute right-2 bottom-2.5 ">{<CiCalculator1 className="text-3xl" />}</button>
            </div>

            <div className='space-y-2'>
                <label>Cuota</label>
                <Controller
                    name="dailyFee"
                    control={control}
                    rules={{ required: "Campo requerido" }}
                    render={({ field: { onChange, value } }) => (
                        <NumericFormat
                            prefix="$ "
                            thousandSeparator="."
                            decimalSeparator=","
                            decimalScale={2}
                            allowLeadingZeros={false}
                            value={value}
                            onValueChange={(values) => onChange(values.floatValue)}
                            className='text-[#FFF] w-full h-[41px] focus:outline-none focus:border px-4 border-[#FF8559] bg-[#1F2937] rounded-md'
                        />
                    )}
                />
            </div>

            <ModalCalculator />

        </>
    )
}