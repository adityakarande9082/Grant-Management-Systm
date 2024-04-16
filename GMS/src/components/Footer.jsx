import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (

<footer className="bg-blue-default">
    <div className="mx-auto max-w-7xl py-8 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center order-2" aria-label="Footer">
            <div className="px-5">
                <a href="#" className="text-base text-white hover:text-gray-200">Back to Top</a>
            </div>

            <div className="px-5">
                <a href="#" className="text-base text-white hover:text-gray-200">Contact Us</a>
            </div>
            <div className="px-5">
                <a href="#" className="text-base text-white hover:text-gray-200">Sitemap</a>
            </div>
            <div className="px-5">
                <a href="#" className="text-base text-white hover:text-gray-200">Accessibility</a>
            </div>
            <div className="px-5">
                <a href="#" className="text-base text-white hover:text-gray-200">Conditions of Use</a>
            </div>
            <div className="px-5">
                <a href="#" className="text-base text-white hover:text-gray-200">Privacy Policy</a>
            </div>
        </nav>
        <div className="mt-8 md:mb-8 flex justify-center space-x-6 md:order-3  ">
            <a href="#" className="text-white hover:text-gray-200">
                <span className="sr-only">Facebook</span>
            <FaFacebook className='h-6 w-6'/>
            </a>

            <a href="#" className="text-white hover:text-gray-200">
                <span className="sr-only">Twitter</span>
            <FaSquareXTwitter className='h-6 w-6'/>
            </a>

            <a href="#" className="text-white hover:text-gray-200">
                <span className="sr-only">Linkedin</span>
            <FaLinkedin  className='h-6 w-6'/>
            </a>

            <a href="#" className="text-white hover:text-gray-200">
                <span className="sr-only">Gitgub</span>
            <FaGithub  className='h-6 w-6'/>
            </a>
        </div>
       
    </div>
</footer>
  )
}

export default Footer