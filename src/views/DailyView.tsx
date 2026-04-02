import { RiDeleteBin6Line } from 'react-icons/ri';
import DailySummary from '../components/Daily/DailySummary';
import FormProduction from '../components/Daily/FormProduction';
import { useForm } from 'react-hook-form'
import type { TProduction } from '../types';
import { useEffect } from 'react';
import { useAppStore } from '../store/useAppStore';
import { initValue } from '../constants';
import { useMutation } from '@tanstack/react-query';
import { saveDaily } from '../api/daily';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function DailyView() {

    const addProduction = useAppStore((state) => state.addProduction)
    const navigate = useNavigate()

    const { register, handleSubmit, reset, watch, control, formState: { errors } } = useForm({
        defaultValues: {
            ...initValue,
            unitPrice: 2000,
            date: new Date().toLocaleDateString('en-CA')
        }
    })

    useEffect(() => {

        const subscription = watch((values) => {
            addProduction(values as TProduction)
        })

        return () => subscription.unsubscribe()

    }, [watch])

    const { mutate } = useMutation({
        mutationFn: saveDaily,
        onError: (error) => {
            toast.error(error.message)
        },

        onSuccess: (data) => {
            reset()
            navigate("/history")
            toast.success(data.message)
        }
    })

    const handleDataForm = (formData: TProduction) => mutate(formData)

    return (
        <div className='p-4 flex flex-col gap-4 '>

            <h2 className='text-2xl'>Producción del día</h2>

            <form onSubmit={handleSubmit(handleDataForm)} className='space-y-4'>

                <FormProduction register={register} errors={errors} control={control} />

                <div className=''>
                    <DailySummary />
                </div>

                <div className='flex gap-4' >
                    <button className=''>
                        <RiDeleteBin6Line className='text-4xl' />
                    </button>
                    <input className='w-full bg-[#1F2937] font-bold h-[45px] rounded-lg' type="submit" value={"Guardar día"} />
                </div>
            </form>
        </div>
    )
}
