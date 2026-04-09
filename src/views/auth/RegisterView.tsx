import { FaCircleUser } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import type {TAuthForm } from "../../types";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { saveUser } from "../../api/services/auth";
import { toast } from "react-toastify";
import Loading from "../../components/Loading/Loading";

export default function RegisterView() {

    const navigate = useNavigate()

    const initData: TAuthForm = {
        username: "",
        email: "",
        businessName: "",
        password: ""
    }

    const { register, handleSubmit, formState: { errors, isValid } } = useForm({ defaultValues: initData, mode: "onChange" });

    const { mutate, isPending } = useMutation({

        mutationFn: saveUser,

        onError: (error) => {
            toast.error(error.message)
        },

        onSuccess: (data) => {
            toast.success(data.message)
            navigate("/auth/login")
        }

    })

    const handleFormData = (formData: TAuthForm) => mutate(formData);

    return (

        <div className="w-full h-full flex flex-col justify-center items-center space-y-4 px-4">

            <div className="flex flex-col gap-4 justify-center items-center">
                <FaCircleUser className="text-5xl" />
                <h1 className="text-4xl">Registrar Cuenta</h1>
            </div>


            <form onSubmit={handleSubmit(handleFormData)} className="flex flex-col gap-4 justify-center items-center w-full ">
                <div className="w-full">
                    <input type="text"
                        placeholder="Usuario"
                        className='text-[#FFF] w-full h-[48px] focus:outline-none focus:border px-4 border-[#FF8559] bg-[#1F2937] rounded-md'
                        {...register("username", {
                            required: "Campo requerido"
                        })}
                    />
                    {errors.username &&
                        <span className="text-red-400 text-sm">{errors.username.message}</span>
                    }
                </div>

                <div className="w-full">
                    <input type="email"
                        className='text-[#FFF] w-full h-[48px] focus:outline-none focus:border px-4 border-[#FF8559] bg-[#1F2937] rounded-md'
                        placeholder="email"
                        {...register("email", {
                            required: "Campo requerido"
                        })}
                    />
                    {errors.email &&
                        <span className="text-red-400 text-sm">{errors.email.message}</span>
                    }

                </div>

                <div className="w-full">
                    <input type="text"
                        className='text-[#FFF] w-full h-[48px] focus:outline-none focus:border px-4 border-[#FF8559] bg-[#1F2937] rounded-md'
                        placeholder="Nombre de Negocio"
                        {...register("businessName", { required: "Campo requerido" })}
                    />
                    {errors.businessName &&
                        <span className="text-red-400 text-sm">{errors.businessName.message}</span>
                    }
                </div>

                <div className="w-full">

                    <input type="password"
                        className='text-[#FFF] w-full h-[48px] focus:outline-none focus:border px-4 border-[#FF8559] bg-[#1F2937] rounded-md'
                        placeholder="password"
                        {...register("password", {
                            required: "Campo requerido",
                            minLength: { value: 8, message: "longitud minima 8" },
                            maxLength: { value: 10, message: "longitud maxima 10" },
                            pattern: {
                                value: /^(?=.*[A-Z])(?=.*\d).*$/,
                                message: "Debe tener al menos una mayúscula y un número"
                            }
                        })}
                    />
                    {errors.password &&
                        <span className="text-red-400 text-sm">{errors.password.message}</span>
                    }
                </div>

                <button
                    type="submit"
                    className={`relative disabled:bg-[#ff85592f] ${isPending ? ' bg-[#ff85592f] ' : 'bg-[#FF8559]'} text-[#FFF] flex justify-center items-center font-bold px-6 py-2 rounded-md text-xl w-full cursor-pointer`}
                    disabled={!isValid && !isPending}
                >
                    <span>
                        {
                            isPending ?
                                <Loading />
                                :
                                "Registrar"
                        }
                    </span>
                </button>
            </form>

            <Link to="/auth/login">¿Ya tienes una cuneta? Ingresar </Link>

        </div>
    )
}