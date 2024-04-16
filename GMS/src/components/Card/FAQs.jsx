import React from 'react'

const FAQs = () => {
  return (
    
    <div className='grid lg:grid-cols-2  p-6'>
        
     
    <div className=' mr-6 gap-5'>
        <div className='text-black shadow-2xl bg-white h-[80px] w-auto flex justify-center items-center'>
            <p>What is the average amount and turn of an award?</p>
        </div>
        <div className='text-black shadow-2xl  bg-white h-[80px] w-auto flex justify-center items-center mt-4'>
            <p>Do you have formal application forms?</p>
        </div>
        <div className='text-black shadow-2xl bg-white h-[80px] w-auto flex justify-center items-center mt-4'>
            <p>How many procurements are issued each year?</p>
        </div>
        <div className='text-black shadow-2xl bg-white h-[80px] w-auto flex justify-center items-center mt-4'>
            <p>Does an applicant or proposer have to be based in California?</p>
        </div>
    </div>
    <div class="relative mb-3" >
  <textarea
    className="peer border-black  block min-h-[273px] w-full rounded shadow-2xl bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
    id="exampleFormControlTextarea1"
    rows="4"
    placeholder="Your message"></textarea>
  <label
    for="exampleFormControlTextarea1"
    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
    >Type a question...
  </label>
  <div className=' shadow-2xl bg-blue-default h-[80px] w-auto flex justify-center items-center mt-4'>
            <button type='submit' className='text-white text-[35px] min-w-[]'>Ask</button>
        </div>
</div>

    </div>
   


  )
}

export default FAQs