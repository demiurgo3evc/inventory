import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react'
import Summary from './Summary';
import { useLocation, useNavigate} from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { findById } from '../../api/services/daily';
import { formatDate } from '../../utils';

export default function Modal() {

  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const dailyId = queryParams.get("dailyId")!;
  const show = dailyId ? true : false;

  const { data } = useQuery({
    queryKey: ["dailyById", dailyId],
    queryFn: () => findById(dailyId),
   enabled: !!dailyId
  })


  if(data) return (
     <Transition appear show={show} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-50" onClose={() => navigate('', { replace: true })}>

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
                {formatDate(data?.date)}
              </Dialog.Title>

              <Summary data={data!} />

            </Dialog.Panel>
          </Transition.Child>

        </div>
      </Dialog>
    </Transition>
  )
}