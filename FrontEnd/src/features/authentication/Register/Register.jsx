import { useState } from 'react';
import { useRegister } from './useRegister';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setpasswordConfirm] = useState('');
    const { register } = useRegister()
    function handleSubmit(e) {
        e.preventDefault();
        register({ name, email, password, passwordConfirm });
        navigate('/quiz', { replace: true });

    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center bg-gray-900 h-[100vh] text-white px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="text-center text-3xl font-bold leading-9 tracking-tight">
                    Create an account
                </h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-xl bg-[#18212f] border border-[#1f2937] py-[2.4rem] px-[4rem]">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="block text-lg font-medium leading-6">
                            Name
                        </label>
                        <div className="mt-2">
                            <input
                                value={name}
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                required
                                className="p-4 block w-full rounded-md border-0 py-3 text-white caret-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-transparent"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-lg font-medium leading-6">
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
                                className="p-4 block w-full rounded-md border-0 py-3 text-white caret-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-transparent"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-lg font-medium leading-6">
                            Password
                        </label>
                        <div className="mt-2">
                            <input
                                value={password}
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="new-password"
                                required
                                className="p-4 block w-full rounded-md border-0 py-3 text-white caret-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-transparent"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="passwordConfirm" className="block text-lg font-medium leading-6">
                            Confirm Password
                        </label>
                        <div className="mt-2">
                            <input
                                value={passwordConfirm}
                                id="passwordConfirm"
                                name="passwordConfirm"
                                type="password"
                                autoComplete="new-password"
                                required
                                className="p-4 block w-full rounded-md border-0 py-3 text-white caret-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-transparent"
                                onChange={(e) => setpasswordConfirm(e.target.value)}
                            />
                        </div>

                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
