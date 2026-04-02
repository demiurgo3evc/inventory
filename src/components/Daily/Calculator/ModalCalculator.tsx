import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react'
import { useAppStore } from '../../../store/useAppStore';
import FormCalculator from './FormCalculator';
import { object } from 'zod';

export default function ModalCalculator() {

    const show = useAppStore((state) => state.modal);
    const handleModal = useAppStore((state) => state.handleModal);
    const [ingrentsCount, setIngrentsCount] = useState(1);

    const handleChangeModal = () => {
        setIngrentsCount(1)
        handleModal()
    }

    return (

        <Transition appear show={show} as={Fragment}>
            <Dialog as="div" className="fixed inset-0 z-50" onClose={() => handleChangeModal()}>

                {/* Fondo oscuro */}
                <Transition.Child
                    as={Fragment}
                    enter="transition-opacity duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-50"
                    leave="transition-opacity duration-200"
                    leaveFrom="opacity-50"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black opacity-45" />
                </Transition.Child>

                {/* Contenedor */}
                <div className="fixed inset-0 flex items-end justify-center">

                    {/* Modal */}
                    <Transition.Child
                        as={Fragment}
                        enter="transform transition duration-300"
                        enterFrom="translate-y-full"
                        enterTo="translate-y-0"
                        leave="transform transition duration-200"
                        leaveFrom="translate-y-0"
                        leaveTo="translate-y-full"
                    >
                        <Dialog.Panel className="w-full max-w-md bg-[#1F2937] text-white rounded-t-2xl p-6">

                            <Dialog.Title className="text-[#FF8559] text-lg font-bold mb-4">
                                Ingredientes del dia
                            </Dialog.Title>

                            <form className='space-y-4 overflow-y-auto max-h-96'>
                                {Array.from({ length: ingrentsCount }).map(() => (
                                    <FormCalculator />
                                ))}
                            </form>

                            <button onClick={() => setIngrentsCount(ingrentsCount + 1)} className='w-full mt-4 p-2 border rounded-lg'>+Agregar ingrediente</button>

                            <div className='mt-4 bg-[#111827] h-14 rounded-lg flex justify-between items-center px-2'>

                                <p className='text-sm  text-[#6B7280]'>Total ingredientes</p>
                                <p className='text-[#10B981]'>$0.00</p>

                            </div>
                        </Dialog.Panel>
                    </Transition.Child>

                </div>
            </Dialog>
        </Transition>
    )

}
