import React from 'react'
import { Link } from 'react-router-dom'

const News = ({ imgurl }) => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center ">
                <div
                    className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-center md:text-center  mb-16 md:mb-0 items-center text-center lg:justify-items-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Lorem ipsum dolor sit amet
                        <br className="hidden lg:inline-block " /><span className="lg:text-[19px]">Cupiditate, aspernatur nam mollitia</span>
                    </h1>
                    <p className="mb-8 leading-relaxed text-justify">On November 8, 2022, California voters upheld the state law, Senate Bill (SB) 793 (Chapter 34, Statutes of 2020), prohibiting tobacco retailers from selling most flavored tobacco products. Please visit the Secretary of State’s website for more information on the election results. </p>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded" alt="hero" src={imgurl} />
                </div>
            </div>
        </section>
    )
}
const ReverseNews = ({ imgurl }) => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center ">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded" alt="hero" src={imgurl} />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 flex flex-col md:items-center md:text-center mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
                        <br className="hidden lg:inline-block" /><span className="lg:text-[19px]">Cupiditate, aspernatur nam mollitia</span>
                    </h1>
                    <p className="mb-8 leading-relaxed text-justify">This health advisory seeks to inform the public about the imminent public health risks posed by vaping any product, including the use of electronic cigarettes (e‐cigarettes), as vaping has recently been linked to severe breathing problems, lung damage, and even death.</p>
                </div>

            </div>
        </section>
    )
}
export { News, ReverseNews };