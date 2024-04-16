import axios from 'axios';
import { toast } from 'react-hot-toast';

const useSetPassword = () => {
    // Function to set a new password for a user
    const setPassword = async ({ userId, password, cpassword }) => {
        // Check if passwords match before sending to the server
        if (password !== cpassword) {
            toast.error("Passwords do not match.");
            return;  // Stop the function if passwords do not match
        }

        try {
            const response = await axios.post(`/api/auth/setpassword1/${userId}`, {
                password,
                cpassword
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            // Log and notify success
            console.log("Set Password success:", response.data);
            toast.success("Password set successfully!");
        } catch (error) {
            // Handle errors more gracefully
            console.log("Set Password error:", error.response ? error.response.data : "Unknown error");
            toast.error(error.response ? error.response.data.error : "Failed to set password. Please try again.");
        }
    };

    return { setPassword };
};

export default useSetPassword;
