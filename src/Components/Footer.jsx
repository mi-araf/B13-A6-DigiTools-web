import React from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-[#101727] text-white">
            <div className="w-10/12 mx-auto lg:w-9/12 pt-20 pb-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2.2fr_1fr_1fr_1fr_1fr] gap-12">
                    
                    <div>
                        <h2 className="text-[40px] font-extrabold mb-4">DigiTools</h2>
                        <p className="opacity-80 text-base">
                            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-medium mb-4">Product</h3>
                        <ul className="space-y-4 text-base">
                            <li className="opacity-70 hover:opacity-100"><a href="#" className="transition-all duration-300  active:scale-[0.98]">Features</a></li>
                            <li className="opacity-70 hover:opacity-100"><a href="#" className="transition-all duration-300  active:scale-[0.98]">Pricing</a></li>
                            <li className="opacity-70 hover:opacity-100"><a href="#" className="transition-all duration-300  active:scale-[0.98]">Templates</a></li>
                            <li className="opacity-70 hover:opacity-100"><a href="#" className="transition-all duration-300  active:scale-[0.98]">Integrations</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-medium mb-4">Company</h3>
                        <ul className="space-y-4 text-base">
                            <li className="opacity-70 hover:opacity-100"><a href="#" className="transition-all duration-300  active:scale-[0.98]">About</a></li>
                            <li className="opacity-70 hover:opacity-100"><a href="#" className="transition-all duration-300  active:scale-[0.98]">Blog</a></li>
                            <li className="opacity-70 hover:opacity-100"><a href="#" className="transition-all duration-300  active:scale-[0.98]">Careers</a></li>
                            <li className="opacity-70 hover:opacity-100"><a href="#" className="transition-all duration-300  active:scale-[0.98]">Press</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-medium mb-4">Resources</h3>
                        <ul className="space-y-4 text-base">
                            <li className="opacity-70 hover:opacity-100"><a href="#" className="transition-all duration-300   active:scale-[0.98]">Documentation</a></li>
                            <li className="opacity-70 hover:opacity-100"><a href="#" className="transition-all duration-300   active:scale-[0.98]">Help Center</a></li>
                            <li className="opacity-70 hover:opacity-100"><a href="#" className="transition-all duration-300   active:scale-[0.98]">Community</a></li>
                            <li className="opacity-70 hover:opacity-100"><a href="#" className="transition-all duration-300   active:scale-[0.98]">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-medium mb-4">Social Links</h3>
                        <div className="flex items-center gap-4">
                            <a href="https://www.instagram.com/tde_araf" target="_blank" rel="noreferrer" className="h-10 w-10 rounded-full bg-white text-[#101727] flex items-center justify-center transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-105 hover:shadow-[0_8px_20px_#ffffff22] active:scale-95" >
                                <FaInstagram className="text-xl" />
                            </a>
                            <a href="https://www.facebook.com/mushfiq.araf.2024/" target="_blank" rel="noreferrer" className="h-10 w-10 rounded-full bg-white text-[#101727] flex items-center justify-center transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-105 hover:shadow-[0_8px_20px_#ffffff22] active:scale-95" >
                                <FaFacebookF className="text-lg" />
                            </a>
                            <a href="https://www.github.com/mi-araf/" target="_blank" rel="noreferrer" className="h-10 w-10 rounded-full bg-white text-[#101727] flex items-center justify-center transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-105 hover:shadow-[0_8px_20px_#ffffff22] active:scale-95" >
                                <FaXTwitter className="text-lg" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-[#e5e7eb26] text-[#FAFAFA] mt-16 pt-6 text-base flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="opacity-50">&copy; 2026 Digitools. All rights reserved.</p>

                    <div className="flex flex-wrap items-center gap-4 md:gap-10">
                        <a className="opacity-70 hover:opacity-100" href="#">Privacy Policy</a>
                        <a className="opacity-70 hover:opacity-100" href="#">Terms of Service</a>
                        <a className="opacity-70 hover:opacity-100" href="#">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;