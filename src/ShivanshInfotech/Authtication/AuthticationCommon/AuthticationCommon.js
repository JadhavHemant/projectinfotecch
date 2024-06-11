import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../AuthticationHome/Images/logo.png';

const AuthenticationCommon = () => {
    const scrollToSection = (sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
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

            <div id="home-content" className="bg-[rgb(33, 37, 41)] h-[300px]">
                <h1>Home</h1>
            </div>
            <div id="features-section" className="bg-[#cdbdbd] h-[300px]">
                <h1>Features</h1>
            </div>
            <div id="modules-section" className="bg-red-500 h-[300px]">
                <h1>Modules</h1>
            </div>
            <div id="pricing-section" className="bg-[#160e0e] h-[300px]">
                <h1>Pricing</h1>
            </div>
            <div id="contact-section" className="bg-[#c1baba] h-[300px]">
                <h1>Contact</h1>
            </div>
        </>
    );
};

export default AuthenticationCommon;
