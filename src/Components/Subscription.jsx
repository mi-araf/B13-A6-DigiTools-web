import React from 'react';
import { IoCheckmark } from "react-icons/io5";

const Subscription = () => {
    return (
        <div className='w-11/12 mx-auto lg:w-9/12 space-y-4 py-14'>
            <h1 className="text-center font-extrabold text-[#101727] text-3xl md:text-5xl">Simple, Transparent Pricing</h1>
            <p className="text-center text-[#627382] text-sm md:text-base">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mx-auto px-6 my-10">

                <div className="card  bg-base-100 h-full rounded-2xl">
                    <div className="card-body bg-[#f2f2f2] rounded-2xl flex flex-col justify-between p-5 md:p-6">
                        <div>
                            <h2 className="text-lg mb-2 md:text-2xl font-bold">Starter</h2>
                            <p className="text-sm text-[#627382] mb-6">Perfect for getting started</p>
                            <span>
                                <span className="text-3xl md:text-4xl font-bold text-[#101727]">$0</span>
                                <span className="text-base md:text-xl text-[#627382]">/Month</span>
                            </span>
                        </div>

                        <ul className="mt-3 md:-mt-6 flex flex-col gap-2 text-sm md:text-base text-[#627382]">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Access to 10 free tools</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Basic templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Community support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>1 project per month</span>
                            </li>
                        </ul>

                        <div className="mt-6">
                            <button className="btn myBtn w-full text-base font-bold">Get Started Free</button>
                        </div>
                    </div>
                </div>

                <div className="relative card bg-base-100 h-full rounded-2xl sm:col-span-1 lg:col-span-1">
                    <span className="absolute rounded-full shadow font-medium -top-3 md:-top-4 left-1/2 -translate-x-1/2 bg-[#FEF3C6] text-sm text-[#BB4D00] px-3 py-1">Most Popular</span>

                    <div className="card-body bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white rounded-2xl flex flex-col justify-between p-5 md:p-6">
                        <div>
                            <h2 className="text-xl md:text-2xl font-bold mb-2">Pro</h2>
                            <p className="text-sm md:text-base opacity-80 text-white mb-6">Best for professionals</p>
                            <span>
                                <span className="text-3xl md:text-4xl font-bold">$29</span>
                                <span className="text-base md:text-xl">/Month</span>
                            </span>
                        </div>

                        <ul className="mt-6 flex flex-col gap-2 font-medium text-sm md:text-base">
                            <li className="flex items-center gap-2">
                                <IoCheckmark /><span>Access to all premium tools</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <IoCheckmark /><span>Unlimited templates</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <IoCheckmark /><span>Priority support</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <IoCheckmark /><span>Unlimited projects</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <IoCheckmark /><span>Cloud sync</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <IoCheckmark /><span>Advanced analytics</span>
                            </li>
                        </ul>

                        <div className="mt-6">
                            <button className="cursor-pointer hover:bg-base-300 bg-white rounded-full w-full py-1.75 font-bold text-base">
                                <span className="bg-linear-to-r from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] bg-clip-text text-transparent">Start Pro Trial</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="card border border-[#F2F2F2] bg-base-100 h-full rounded-2xl">
                    <div className="card-body bg-[#f2f2f2] rounded-2xl flex flex-col justify-between p-5 md:p-6">
                        <div>
                            <h2 className="text-lg mb-2 md:text-2xl font-bold">Enterprise</h2>
                            <p className="text-sm text-[#627382] mb-6">For teams and businesses</p>
                            <span>
                                <span className="text-3xl md:text-4xl font-bold text-[#101727]">$99</span>
                                <span className="text-base md:text-xl text-[#627382]">/Month</span>
                            </span>
                        </div>

                        <ul className="mt-6 flex flex-col gap-2 text-sm md:text-base text-[#627382]">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Everything in Pro</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Team collaboration</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Custom integrations</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Dedicated support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>SLA guarantee</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Custom branding</span>
                            </li>
                        </ul>

                        <div className="mt-6">
                            <button className="btn myBtn w-full text-base font-bold">Contact Sales</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscription;