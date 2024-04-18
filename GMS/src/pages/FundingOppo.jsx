import React from 'react';
import customHomeImage from '/src/assets/customhome.png';  // Use import for static assets to utilize Webpack bundling

const FundingOppo = () => {
  return (
    <div className='lg:mt-11 px-3'>
     <section className="dark:bg-dark bg-blue-default py-[70px] lg:rounded-lg">
   <div class="mx-auto px-4 sm:container">
      <div
         className="border-stroke dark:border-dark-3 flex items-center border-b pb-6"
         >
         <div
            className="mr-[18px] h-[44px] w-full max-w-[44px] overflow-hidden rounded-xl"
            >
            <img
               src={customHomeImage}
               alt="page title"
               className="h-full w-full object-cover object-center"
               />
         </div>
         <div>
            <h4 className=" mb-1 text-sm font-semibold text-white">
            Funding Opportunities
            </h4>
            <p className="text-white   text-sm font-medium">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit ante.
            </p>
         </div>
      </div>
   </div>
</section>
      <div>
      <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">Sr.No</th>
                  <th scope="col" className="px-6 py-4">Funding Opportunity Title</th>
                  <th scope="col" className="px-6 py-4">Application Due Date</th>
                  <th scope="col" className="px-6 py-4">Status</th>
                  <th scope="col" className="px-6 py-4">Requested Funding Aveilable</th>
                  <th scope="col" className="px-6 py-4">Funding Opportunity Image</th>
                  <th scope="col" className="px-6 py-4">Create Date</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                  <td className="whitespace-nowrap px-6 py-4">Mark</td>
                  <td className="whitespace-nowrap px-6 py-4">Otto</td>
                  <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                  <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                  <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                  <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                </tr>
               
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default FundingOppo;
