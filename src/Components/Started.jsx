import React from 'react';

const Started = () => {
    const steps = [
        {
            id: "01",
            title: "Create Account",
            text: "Sign up for free in seconds. No credit card required to get started.",
            img: "/assets/user.png",
        },
        {
            id: "02",
            text: "Browse our catalog and select the tools that fit your needs.",
            title: "Choose Products",
            img: "/assets/package.png",
        },
        {
            id: "03",
            title: "Start Creating",
            text: "Download and start using your premium tools immediately.",
            img: "/assets/rocket.png",
        },
    ];

    return (
        <div className='bg-base-200 text-center'>
            <div className='w-11/12 mx-auto lg:w-9/12 py-24'>
                <h2 className='mb-5 font-extrabold text-3xl text-[#101727] md:text-5xl'>Get Started in 3 Steps</h2>
                <p className='text-[#627382] text-sm md:text-base'>Start using premium digital tools in minutes, not hours.</p>

                <div className="mx-auto grid grid-cols-1 gap-6 py-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
                    {
                        steps.map((step) => (
                            <div key={step.id} className="border border-[#F1F1F1] h-full flex flex-col rounded-2xl bg-white p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_30px_#4F39F614] hover:border-[#E9D9FF] hover:cursor-default">
                                <div className="mb-6 flex justify-end">
                                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] font-semibold text-white">
                                        {step.id}
                                    </span>
                                </div>

                                <div className="flex flex-1 flex-col items-center text-center space-y-5">
                                    <div className="flex justify-center">
                                        <div className="w-20 h-20 rounded-full bg-purple-200 flex items-center justify-center">
                                            <img src={step.img} alt={step.title} className="h-13 object-contain" />
                                        </div>
                                    </div>

                                    <h3 className="text-xl text-[#101727] font-bold md:text-2xl">{step.title}</h3>
                                    <p className="mb-12 text-sm text-[#627382] md:text-base">{step.text}</p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Started;