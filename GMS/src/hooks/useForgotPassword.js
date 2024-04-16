import React from 'react'
import toast from 'react-hot-toast';
import axios from 'axios';
const useForgotPassword = () => {
    const forgotPassword = async (email) => {
        try {
            const res = await axios.post('/api/auth/sendmail', { email }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log("Send mail successfully:", res.data);
            toast.success("Send mail successfully!");
        } catch (error) {
            console.log("Send mail failed:", error);
            // Extracting a more detailed error message if available
            const errorMessage = error.response?.data?.error || error.message || 'Unknown error';
            toast.error(`Send mail failed: ${errorMessage}`);
        }
    };

    return [forgotPassword];
};


export default useForgotPassword