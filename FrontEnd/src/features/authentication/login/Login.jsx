import { useState } from 'react'
import { useLogin } from './useLogin'
import Spinner from '../../../ui/Spinner'
import { useAuth } from '../../../hooks/useAuth'
function Login() {
    const [email, setEmail] = useState("amine12@gmail.com")
    const [password, setPassword] = useState("mounir12@21")
    const { login, isLoading } = useLogin()
    const {dispatch}=useAuth()
    console.log(email,password)
    function handelSubmit(e) {
        e.preventDefault()
        login({email, password,dispatch})
    }
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center bg-gray-900 h-[100vh] text-white px-6 py-12 lg:px-8">
            <div className="sm:mx-auto  sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto  w-[20rem]"
                    src='/QuizPng.png'
                    alt="Your Company"
                />
                <h2 className=" text-center text-3xl font-bold leading-9 tracking-tight ">
                    Sign in to your account
                </h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-xl bg-[#18212f] border border-[#1f2937] py-[2.4rem] px-[4rem]">
                <form className="space-y-6" onSubmit={handelSubmit} >
                    <div>
                        <label htmlFor="email" className="block text-lg font-medium leading-6 ">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                            value={email}
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="p-4 block w-full rounded-md border-0 py-3 text-white caret-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-transparent "
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-lg font-medium leading-6 ">
                                Password
                            </label>
                            <div className="text-sm">
                                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                            value={password}
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="p-4 block w-full rounded-md border-0 py-3 text-white caret-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-transparent"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            {
                                isLoading ? <Spinner /> : ' Sign in'
                            }

                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login
