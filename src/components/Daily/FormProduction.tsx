import type { UseFormRegister, FieldErrors, Control } from "react-hook-form"
import type { TProduction } from "../../types"
import { NumericFormat } from 'react-number-format';
import { Controller } from 'react-hook-form'
import { CiCalculator1 } from "react-icons/ci";
import { useAppStore } from "../../store/useAppStore";
import ModalCalculator from "./Calculator/ModalCalculator";
type FormProductionProps = {
    register: UseFormRegister<TProduction>,
    errors: FieldErrors<TProduction>,
    control: Control<TProduction>
}

export default function FormProduction({ register,  control }: FormProductionProps) {

    const handleModal = useAppStore((state) => state.handleModal);

    return (

        <>
            <div className='flex items-center justify-between'>

                <label htmlFor="">fecha</label>

                <div>

                    <input type="date"
                        className='text-center text-[#FF8559] w-full h-[41px] focus:outline-none focus:border px-4 border-[#FF8559]  bg-[#1F2937] rounded-md'
                        defaultValue={new Date().toISOString().split("T")[0]}
                        disabled={true}
                        {...register("date", {
                            required: "Campo requerido"
                        })}
                    />

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
                    rules={{ required: "Campo requerido" }}
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
            </div>

            <div className='space-y-2'>
                <label>Precio producto</label>
                <Controller

                    name="unitPrice"
                    control={control}
                    rules={{ required: "Campo requerido" }}
                    render={({ field: { onChange, value } }) => (
                        <NumericFormat
                            prefix="$ "
                            thousandSeparator="."
                            decimalSeparator=","
                            decimalScale={2}
                            allowLeadingZeros={false}
                            defaultValue={2000}
                            value={value}
                            onValueChange={(values) => onChange(values.floatValue)}
                            className='text-[#FF8559] w-full h-[41px] focus:outline-none focus:border px-4 border-[#FF8559] bg-[#1F2937] rounded-md'
                            disabled={true}
                        />
                    )}
                />
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
                <button type="button" onClick={() => handleModal()} className="hidden absolute right-2 bottom-2.5 ">{<CiCalculator1 className="text-3xl" />}</button>
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