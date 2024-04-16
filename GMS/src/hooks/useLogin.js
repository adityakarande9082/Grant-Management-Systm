import axios from 'axios';
import toast from 'react-hot-toast';

const useLogin = () => {
    const login = async ({ email, password }) => {
        try {
            const res = await axios.post('/api/auth/login', {
                email,
                password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log("Login success:", res.data);
            toast.success("Login successful!");
        } catch (error) {
            console.error(error);
            // Ensure to capture error.message correctly
            toast.error(`Login failed: ${error.message || 'Unknown error'}`);
        }
    };

    // Return an object containing the login function
    return { login };
}

export default useLogin;
