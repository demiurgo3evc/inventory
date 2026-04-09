import { useForm } from "react-hook-form";
import { FaCircleUser } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import type { Login } from "../../types";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../api/services/auth";
import { toast } from "react-toastify";
import { setToken } from "../../utils/auth";
import { useAppStore } from "../../store/useAppStore";
import Loading from "../../components/Loading/Loading";

export default function LoginView() {

    const addUser = useAppStore((state) => state.addUser)
    const navigate = useNavigate();

    const initData: Login = {
        email: "",
        password: ""
    }

    const { register, handleSubmit, formState: { errors, isValid } } = useForm<Login>({ defaultValues: initData, mode: "onChange" });

    const { mutate, isPending } = useMutation({

        mutationFn: login,

        onError: (error) => {
            toast.error(error.message)
        },

        onSuccess: (data) => {
            setToken(data.access_token)
            addUser(data.user)
            toast.success("Ingreso exitoso")
            navigate("/")
        }

    })

    const handleLogin = (formData: Login) => mutate(formData);

    return (
        <div className="w-full h-full flex flex-col justify-center items-center space-y-4">

            <div className="flex flex-col gap-4 justify-center items-center">
                <FaCircleUser className="text-5xl" />
                <h1 className="text-4xl">Iniciar Session</h1>
            </div>


            <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col gap-4 justify-center items-center px-4 w-full ">
                <div className="w-full">
                    <input type="text"
                        placeholder="Usuario"
                        className='text-[#FFF] w-full h-[48px] focus:outline-none focus:border px-4 border-[#FF8559] bg-[#1F2937] rounded-md'
                        {...register("email", {
                            required: "Campo requerido"
                        })}

                    />
                    {errors.email &&
                        <span className="text-red-400 text-sm">{errors.email.message}</span>
                    }
                </div>

                <div className="w-full">
                    <input type="password"
                        className='text-[#FFF] w-full h-[48px] focus:outline-none focus:border px-4 border-[#FF8559] bg-[#1F2937] rounded-md'
                        placeholder="contraseña"
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

                    {isPending ? <Loading /> : "Ingresar"}

                </button>

            </form>

            <Link to="/auth/register">¿No tienes una cunta? Crear cuenta </Link>

        </div>
    )
}