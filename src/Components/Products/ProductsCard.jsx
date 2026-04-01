import React from 'react';

const ProductsCard = () => {
    return (
        <div>
            <div className="relative card w-96 bg-base-100 border border-[#F2F2F2] shadow-sm rounded-2xl">
                <div className="absolute top-2 right-2">
                    <p className="text-[#BB4D00] bg-[#FEF3C6] font-bold rounded-full py-2 px-3">
                        Most Popular
                    </p>
                </div>
                <div className="card-body">
                    {/* <p className="badge text-[#BB4D00] bg-[#FEF3C6] font-bold rounded-full py-2 px-3">Most Popular</p> */}
                    <div className='border border-[#f2f2f2] rounded-full w-fit p-3'>
                        <img src="../../../Ui/assets/products/design-tool.png" alt="" />
                    </div>
                    <div className="">
                        <h2 className="text-2xl text-[#101727] font-bold">Premium</h2>
                    </div>
                    <p className='text-base text-[#627382]'>Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.</p>
                    <p className="font-bold text-2xl">$29<span className='text-[#627382] text-base'>/mo</span></p>
                    <ul className="flex flex-col gap-2 text-xs">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>High-resolution image generation</span>
                        </li>
                    </ul>
                    <div className="mt-6">
                        <button className="btn myBtn w-full">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;