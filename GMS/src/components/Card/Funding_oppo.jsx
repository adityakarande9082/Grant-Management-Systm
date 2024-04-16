import React from 'react'

const Funding_oppo = ({ imgurl }) => {
    return (
  

        <div className="w-80 bg-white shadow-2xl  duration-500 hover:scale-105 hover:shadow-xl">
            <div className=' h-80 pb-3'>
            <p className=" top-9 left-0 right-0 text-black font-bold text-[19px] mx-5 flex ">
                    Accepting Applications
                </p>
                <p className=" top-9 left-0 right-0 text-gray-700 pb-3  text-[14px] mx-5 flex ">
                    Lorem ipsum dolor sit amet               
                 </p>
                <img src={imgurl}
                    alt="Product" className="h-[203px] w-80 object-cover " />
               
                <p className=" bottom-0 left-0 right-0 text-black mx-5 font-bold   text-justify">
                Texas Department of Motor Vehicles
                </p>
                <p className=" bottom-0 left-0 right-0 text-gray-700 mx-5 text-[10px]   mb-2  text-justify">
                Texas Department of Motor Vehicles
                </p>
                <p className=" bottom-0 left-0 right-0 text-black mx-5 text-[15px]  text-justify">
                Texas Department of Motor Vehicles
                </p>
                <p className=" bottom-0 left-0 right-0 text-black mx-5 text-[15px]  text-justify">
                Texas Department of Motor Vehicles
                </p>
            </div>
            <div className="px-4 py-3 w-72 pt-12">
                <div className=" ">
                    <button
                        type="button"
                        className=" h-[26px] w-[90px] bg-blue-default text-white hover:bg-blue-light">
                        View
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Funding_oppo