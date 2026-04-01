import React from 'react';

const ChallengeSection = () => {
    return (
        <div className='bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white text-center text-sm md:text-base space-y-4 py-28 flex flex-col justify-center items-center mx-auto px-5'>
            <h2 className='font-extrabold text-3xl md:text-[40px]'>Ready to Transform Your Workflow?</h2>
            <p className='opacity-80'>Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>

            <div className='my-5 flex flex-col md:flex-row gap-4'>
                <button className="btn bg-white rounded-full font-semibold shadow-none">
                    <span className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent">Explore Products</span>
                </button>
                <button className="btn font-semibold btn-outline rounded-full w-40">View Pricing</button>
            </div>
            <p className='opacity-80'>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
    );
};

export default ChallengeSection;