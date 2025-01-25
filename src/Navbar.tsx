import React, { ReactElement } from "react";

export const Navbar:React.FC = ():ReactElement<HTMLElement> => {
    return(
        <nav className="bg-[#727D73]">
            <div className="container mx-auto flex justify-between items-center h-16">
                <div className="text-[#D0DDD0]">Logo</div>
                <div className="hidden md:flex space-x-6 ml-auto">
                    <a href="#" className="text-[#D0DDD0]">Home</a>
                    <a href="#" className="text-[#D0DDD0]">About</a>
                    <a href="#" className="text-[#D0DDD0]">Service</a>
                    <a href="#" className="text-[#D0DDD0]">Contact</a>
                </div>

                <div className="md:hidden flex items-center">
                    <button id="hamburger-icon" className="text-[#D0DDD0] focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>

                <div id="mobile-menu" className="md:hidden hidden bg-[#D0DDD0]">
                    <div className="space-y-4 py-4">
                    <a href="#" className="text-[#D0DDD0]">Home</a>
                    <a href="#" className="text-[#D0DDD0]">About</a>
                    <a href="#" className="text-[#D0DDD0]">Service</a>
                    <a href="#" className="text-[#D0DDD0]">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}