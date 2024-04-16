import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useLogin from '../hooks/useLogin';


const Login = () => {

    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();
    const { login } = useLogin();
   
    const handleLogin = async (e) => {
        e.preventDefault();
        const loginSuccess = await login(inputs);
        if (loginSuccess) {
            navigate('/'); // Redirect to dashboard on success
        }
    }
    const handleLoginWithGoogle = () => {
        window.open("http://localhost:1010/auth/google", "_self");
    };

    const handleLoginWithTwitter = () => {
        window.open("http://localhost:1010/auth/twitter", "_self");
    }

    const handleLoginWithFacebook = () => {
        window.open("http://localhost:1010/auth/facebook", "_self");
    }


    const handleLoginWithLinkedin = () => {
        window.open("http://localhost:1010/auth/linkedin", "_self");
    }



    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">

            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className=" text-center text-3xl font-extrabold text-gray-900">
                    Harris County Community
                    Services Department
                </h2>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" onSubmit={handleLogin}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Username
                            </label>
                            <div className="mt-1">
                                <input id="email" name="email" type="email" required
                                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Enter your username or email"
                                    value={inputs.email}
                                    onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="mt-1">
                                <input id="password" name="password" type="password" required
                                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Enter your password"
                                    value={inputs.password}
                                    onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <p><Link to='/register'>Register</Link></p>
                            </div>
                            <div className="text-sm">
                                <Link to="/forgotPassword" className="font-medium text-blue-light hover:text-blue-dark">
                                    Forgot your password?
                                </Link>
                            </div>
                        </div>
                        <div>
                            <button type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-dark hover:bg-blue-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Login
                            </button>
                        </div>
                    </form>
                    <div className="mt-6">
                        <div className="relative">
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2  text-gray-500">
                                    Or continue with
                                </span>
                            </div>
                        </div>
                        <div className="mt-6 grid grid-cols-4 gap-3">
                            <div>
                                <Link onClick={handleLoginWithLinkedin}
                                    className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                    <img className="h-8 w-8" src="/src/assets/linkedin.svg"
                                        alt="" />
                                </Link>
                            </div>
                            <div>
                                <Link onClick={handleLoginWithTwitter}

                                    className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                    <img className="h-8 w-8" src="/src/assets/twitterx.svg"
                                        alt="" />
                                </Link>
                            </div>
                            <div>
                                <Link onClick={handleLoginWithFacebook}
                                    className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                    <img className="h-8 w-8" src="/src/assets/facebook.svg"
                                        alt="" />
                                </Link>
                            </div>
                            <div>
                                <Link onClick={handleLoginWithGoogle}
                                    className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                    <img className="h-8 w-8" src="/src/assets/google.svg"
                                        alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Login