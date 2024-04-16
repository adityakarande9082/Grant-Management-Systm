import React from 'react'
import Funding_oppo from '../components/Card/Funding_oppo'
import image1 from "/src/assets/F_O_1.jpeg"
import image2 from "/src/assets/F_O_2.jpeg"
import image3 from "/src/assets/F_O_3.jpeg"
import image4 from "/src/assets/F_O_4.jpeg"
import { News, ReverseNews } from '../components/Card/News'
import image5 from "/src/assets/news_01.jpeg"
import image6 from "/src/assets/news_02.jpg"
import image7 from "/src/assets/news_03.jpeg"
import FAQs from '../components/Card/FAQs'


const Home = () => {
  return (
    <div className=' flex-wrap'>
      <div className='w-auto h-[632px]'>
        <img className='w-[100vw] h-[632px]  ' src='./src/assets/hero_main.jpg' alt='Hero_img' />
        <p className='relative bottom-[550px] left-0 right-0  text-black   mx-5 pb-10 text-[50px] max-w-[500px]  '>Welcome  To</p>
        <p className='relative bottom-[550px] left-0 right-0 font-bold text-black    mx-5 pb-10 text-[50px] max-w-[500px] '>Harris County Community </p>
        <p className='relative bottom-[600px] left-0 right-0 font-bold text-black    mx-5 pb-10 text-[50px] max-w-[500px]'>Services Department</p>
      </div>
      <div className=' mt-[72px] p-[20px]'>
        <div className='flex justify-around  items-center '>
          <h1 className='font-bold text-black text-[30px] h-16 mb-[20px]'>Funding Opportunities</h1>
        </div>
        <div>

        </div>
        <div class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-4 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
          <Funding_oppo imgurl={image1} className="" />
          <Funding_oppo imgurl={image2} className="" />
          <Funding_oppo imgurl={image3} className="" />
          <Funding_oppo imgurl={image4} />
        </div>
      </div>
      <div className=' mt-[72px] p-[20px]'>
        <div className='justify-around flex items-center  '>
          <h1 className='font-bold text-black text-[30px] h-16 mb-[20px] '>News</h1>
        </div>
        <div className='grid lg:grid-cols-1 '>
          <News imgurl={image5} />
          <ReverseNews imgurl={image6} />
          <News imgurl={image7} />
        </div>
      </div>
      <div className='mt-[10px] mb-8'>
        <div className='justify-around flex items-center'>
          <h1 className='font-bold text-black text-[30px] mt-5 '>
            FAQs
          </h1>
        </div>
        <div className='grid mt-14'>
          <FAQs />
        </div>
      </div>
    </div>
  )
}

export default Home