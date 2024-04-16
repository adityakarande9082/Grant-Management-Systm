import React, { useState } from 'react';
import toast from 'react-hot-toast';
import useSetPassword from '../hooks/useSetPassword';
import { useParams } from 'react-router-dom';

const SetPassword = () => {
    const [passwords, setPasswords] = useState({
        password: '',
        cpassword: ''
    });
    const { userId } = useParams();

const {setPassword } = useSetPassword();
     
const handleSubmit = async (e) => {
  e.preventDefault();
  
  // First check if passwords match
  if (passwords.password !== passwords.cpassword) {
      toast.error('Passwords do not match');
      console.log('Passwords do not match');
      return;
  }

  // If passwords match, then proceed to set the password
  await setPassword({
      userId,
      password: passwords.password,
      cpassword: passwords.cpassword
  });
};

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="text-center text-3xl font-extrabold text-gray-900">
                    Harris County Community Services Department
                </h2>
                <h1 className="mt-8 text-center text-2xl font-extrabold text-gray-600">
                    Password Validation
                </h1>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="mt-1">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Enter your Password"
                                    value={passwords.password}
                                    onChange={(e) => setPasswords({ ...passwords, password: e.target.value })}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                                Confirm Password
                            </label>
                            <div className="mt-1">
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    required
                                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Confirm your Password"
                                    value={passwords.confirmPassword}
                                    onChange={(e) => setPasswords({ ...passwords, cpassword: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center"></div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-dark hover:bg-blue-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                    <div className="mt-6"></div>
                </div>
            </div>
        </div>
    );
};

export default SetPassword;
