import React from 'react';
import ProductsCard from './ProductsCard';
import CartSection from './CartSection';

const Products = ({ products, cartItems, onAddToCart, activeTab, setActiveTab, onRemove, onCheckout }) => {
    const isCartActive = activeTab === 'cart';

    return (
        <div className='w-11/12 mx-auto lg:w-9/12 my-24'>
            <div className='space-y-4 text-center'>
                <h2 className='font-extrabold text-5xl'>Premium Digital Tools</h2>
                <p className='text-base text-[#627382]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                <div className='inline-flex rounded-full border border-[#E5E7EB] bg-white p-1 shadow-sm'>
                    <button className={`btn rounded-full px-8 normal-case ${!isCartActive ? 'myBtn' : 'btn-ghost'}`} onClick={() => setActiveTab('products')}>
                        Products
                    </button>
                    <button className={`btn rounded-full px-8 normal-case ${isCartActive ? 'myBtn' : 'btn-ghost'}`} onClick={() => setActiveTab('cart')}>
                        Cart ({cartItems.length})
                    </button>
                </div>
            </div>

            {
                isCartActive 
                ? <CartSection cartItems={cartItems} onRemove={onRemove} onCheckout={onCheckout} />
                : <ProductsCard products={products} cartItems={cartItems} onAddToCart={onAddToCart} />
            }
        </div>
    );
};

export default Products;