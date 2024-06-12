import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../AuthticationHome/Images/logo.png';
import computer from '../AuthticationHome/Images/computer.png'
import sideimage from '../AuthticationHome/Images/1.png'
const AuthenticationCommon = () => {
    const scrollToSection = (sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        const navbarHeight = document.querySelector('.sticky').offsetHeight; // Get the height of the navigation bar

        if (sectionElement && navbarHeight) {
            const { top } = sectionElement.getBoundingClientRect();
            const scrollPosition = window.pageYOffset + top - navbarHeight; // Adjusted scroll position

            window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className="bg-[#151c51] text-white capitalize pl-[100px] pr-[100px] sticky top-0 z-10">
                <div className="flex justify-between items-center h-full px-4">
                    <div className="flex space-x-4">
                        <img src={logo} alt="Company Logo" className="w-[300px]" />
                    </div>
                    <div className="flex font-bold">
                        <div className="space-x-10 p-2">
                            <Link to="#" onClick={() => scrollToSection('home-content')}>Home</Link>
                            <Link to="#" onClick={() => scrollToSection('features-section')}>Features</Link>
                            <Link to="#" onClick={() => scrollToSection('modules-section')}>Modules</Link>
                            <Link to="#" onClick={() => scrollToSection('pricing-section')}>Pricing</Link>
                            <Link to="#" onClick={() => scrollToSection('contact-section')}>Contact</Link>
                        </div>
                        <div className="space-x pl-2">
                            <Link to="#" className="bg-blue-500 text-white rounded-full px-4 py-2">Login</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex justify-between items-center h-full px-4 bg-[#3a51fd] p-4 text-[white] '>
                    <div id="home-content" className=" h-auto p-4  ml-[120px] pt-4">
                        <span className='text-[80px] font-bold text-[white]'>ACCURATE</span>
                        <div className='p-4'>
                            <span className='text-[40px] text-[white]'>
                                Online
                                <br /> Accounting & ERP
                                <br />Software
                            </span>
                            <br />
                            <span className='text-[white]'>
                                Start your free Trial Now..!
                            </span>
                            <br />

                        </div>
                        <button className='bg-[blue] hover:bg-[#3838a7] p-4  rounded-[50px]'>Get Started</button>
                        <div className='inline pl-2'>
                            <button className=' hover:text-[#3838a7] p-4'>Watch Demo</button>
                        </div>
                    </div>
                    <div className='flex'>
                        <img src={computer} alt="Computer Icon" className="" />
                    </div>
                </div>
                <div className='bg-[white] h-auto p-4'>
                    <div class="text-center text-[#3434b9] font-bold ">
                        <p class="p-4 text-[20px]">Trusted by Valuable Customers</p>
                    </div>
                    <div className='grid grid-cols-5 gap-4 pl-[70px] '>
                        <div className='translate-x-6'>
                            <img src={logo} alt="Company Logo" className="w-[200px]" />
                        </div>
                        <div className='translate-x-6'>
                            <img src={logo} alt="Company Logo" className="w-[200px]" />
                        </div>
                        <div className='translate-x-6'>
                            <img src={logo} alt="Company Logo" className="w-[200px]" />
                        </div>
                        <div className='translate-x-6'>
                            <img src={logo} alt="Company Logo" className="w-[200px]" />
                        </div>
                        <div className='translate-x-6'>
                            <img src={logo} alt="Company Logo" className="w-[200px]" />
                        </div>
                    </div>
                </div>
            </div>
            <div id="features-section" className="bg-[#efeeee] h-auto p-2">
                <div className='text-center pt-[20px]'>
                    <span className='text-[#3636c7] text-[30px]'>Our Key Features</span>
                    <br />
                    <span className='text-black text-[30px] font-semibold'> Accurate ERP has a Wide Range Of Features not
                        <br />limited to</span>
                </div>
                <div className='grid grid-cols-3 gap-4 p-4 '>

                    <div className='bg-white rounded-tl-lg rounded-br-lg overflow-hidden shadow-lg h-auto w-auto flex justify-center items-center hover:rotate-x-180'>
                        <img src={logo} alt="Company Logo" className="w-[200px]" />
                    </div>
                    <div className='bg-white rounded-tl-lg rounded-br-lg overflow-hidden shadow-lg h-auto w-auto flex justify-center items-center hover:rotate-x-180'>
                        <img src={logo} alt="Company Logo" className="w-[200px]" />
                    </div>
                    <div className='bg-white rounded-tl-lg rounded-br-lg overflow-hidden shadow-lg h-auto w-auto flex justify-center items-center hover:rotate-x-180'>
                        <img src={logo} alt="Company Logo" className="w-[200px]" />
                    </div>
                    <div className='bg-white rounded-tl-lg rounded-br-lg overflow-hidden shadow-lg h-auto w-auto flex justify-center items-center hover:rotate-x-180'>
                        <img src={logo} alt="Company Logo" className="w-[200px]" />
                    </div>
                    <div className='bg-white rounded-tl-lg rounded-br-lg overflow-hidden shadow-lg h-auto w-auto flex justify-center items-center hover:rotate-x-180'>
                        <img src={logo} alt="Company Logo" className="w-[200px]" />
                    </div>
                    <div className='bg-white rounded-tl-lg rounded-br-lg overflow-hidden shadow-lg h-auto w-auto flex justify-center items-center hover:rotate-x-180'>
                        <img src={logo} alt="Company Logo" className="w-[200px]" />
                    </div>
                </div>

            </div>
            <div id="modules-section" className="bg-[white] h-auto">
                <div className='flex justify-between items-center h-full px-4 bg-[#fbfbfb] p-4 text-[#080808] '>
                    <div className='flex w-[50%] text-start pl-[120px] p-7'>
                        About Us
                        <br />
                        ACCURATE ERP SOFTWARE
                        <br />
                        “ACCURATE ERP” is an online accounting & ERP software developed and marketed by Shivansh Innovative Solutions. It helps to access and manage your Books of Accounts from anywhere at anytime. ACCURATE ERP allows you to access and update data using any device connected to internet, including your Mobile phone, tablet, PC or laptop. MIS alerts keep you updated about your business and BI (Business Intelligence) dashboard with built-in Analytics help you take informed decisions.

                        ACCURATE ERP is focused mainly toward small and medium-sized businesses and offers accounting applications as well as cloud-based versions that allows an organization to use a system of integrated application to manage the business transactions. Accurate ERP system typically integrates all facets of business transactions - including Sales, Purchase, Banking, Cash, Taxation — in a single database, application and user interface.

                        We caters to the needs of multiple industry segments, through innovative, easy-to-use, secured, integrated, hosted solutions in a simple business model. Accurate ERP serves its clients with the help of best practices gained through its global experience, domestic market reach, skills, and delivery capabilities.
                    </div>
                    <div className='flex w-[50%]'>
                        <img src={sideimage} alt='sideimage' />

                    </div>
                </div>
            </div>
            <div id="pricing-section" className="bg-[#e94040] h-[300px] p-4">
                <h1>going on</h1>
            </div>
            <div id="contact-section" className="bg-[#c1baba] h-[300px] p-4">
                <h1>going on</h1>
            </div>

        </>
    );
};

export default AuthenticationCommon;
