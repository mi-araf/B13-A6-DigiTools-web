import React from 'react';
import { CiPlay1 } from "react-icons/ci";

const Hero = () => {
    return (
        <div className=''>
            <div className="hero my-14 w-11/12 mx-auto lg:w-9/12">
                <div className="hero-content flex-col lg:flex-row-reverse gap-14">
                    <img src="../../Ui/assets/banner.png" className="max-w-sm rounded-lg shadow-xl" />
                    <div className='space-y-5'>
                        <div className='w-fit bg-[#E1E7FF] px-4 py-2 rounded-full flex gap-1'>
                            <span className="animate-pulse pt-1"><img src="../../Ui/assets/Group-5.png" alt="" /></span>
                            <p className='text-linear'>
                                New: AI-Powered Tools Available
                            </p>
                        </div>
                        <h1 className="text-5xl font-extrabold leading-13 lg:text-7xl lg:leading-20">Supercharge Your <br /> Digital Workflow</h1>
                        <p className="text-[#627382] text-xl">Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.<br />Explore Products</p>
                        <div className='flex gap-4'>
                            <button className='btn myBtn'>Explore Products</button>
                            <button className="btn rounded-3xl btn-ghost text-linear border-[#9514FA] hover:transform hover:scale-105 duration-75"><CiPlay1 className='pt-0.5' />Watch Demo</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white flex gap-4 py-14 px-50 justify-around items-center'>
                <div className=''>
                    <h1 className='font-extrabold text-6xl mb-4'>50K+</h1>
                    <p className='font-medium text-2xl opacity-75'>Active Users</p>
                </div>
                <div className="divider divider-horizontal before:bg-white/40 after:bg-white/40"></div>
                <div>
                    <h1 className='font-extrabold text-6xl mb-4'>200+</h1>
                    <p className='font-medium text-2xl opacity-75'>Premium Tools</p>
                </div>
                <div className="divider divider-horizontal before:bg-white/50 after:bg-white/50"></div>
                <div>
                    <h1 className='font-extrabold text-6xl mb-4'>4.9</h1>
                    <p className='font-medium text-2xl opacity-75'>Rating</p>
                </div>
            </div>

        </div>
    );
};

export default Hero;