import axios from 'axios'
import React, { useEffect } from 'react'

const useGetAllFundingOppo = () => {
 
     useEffect(()=>{
        const getAllFundingOppo = async()=>{
            try {
                const res=await axios.get('http://localhost:1010/api/auth/getAllFundingOpportunities',{
                    
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    
                });
                console.log("fatch FundingOpportunity success:", res.data);
                toast.success("fatch FundingOpportunity successful!");
            } catch (error) {
                console.log(error.message);
                toast.success("Not fatch FundingOpportunity successful!");
            }
        }
        getAllFundingOppo();
     },[]);
}

export default useGetAllFundingOppo