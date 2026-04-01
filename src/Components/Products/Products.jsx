import React from 'react';
import ProductsCard from './ProductsCard';

const Products = () => {
    return (
        <div className='w-11/12 mx-auto lg:w-9/12 my-24'>
            <div className='space-y-4 text-center'>
                <h2 className='font-extrabold text-5xl'>Premium Digital Tools</h2>
                <p className='text-base text-[#627382]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                <div className='border border-[#ededed] rounded-full w-fit mx-auto p-1'>
                    <button className="btn myBtn rounded-full">Products</button>
                    <button className="btn btn-ghost rounded-full">Cart <span>(0)</span></button>
                </div>
            </div>

            <ProductsCard></ProductsCard>
        </div>
    );
};

export default Products;