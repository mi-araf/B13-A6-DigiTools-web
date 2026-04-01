import React from 'react';

const badgeStyles = {
    info: 'bg-sky-100 text-sky-700',
    success: 'bg-emerald-100 text-emerald-700',
    warning: 'bg-amber-100 text-amber-700',
};

const ProductsCard = ({ products, cartItems, onAddToCart }) => {
    return (
        <div className='mt-12 grid gap-6 lg:grid-cols-3'>
            {
                products.map((product) => {
                    const inCart = cartItems.some((item) => item.id === product.id);
                    const badgeClass = badgeStyles[product.tagType] || badgeStyles.info;

                    return (
                        <div key={product.id} className='relative overflow-hidden rounded-2xl border border-[#F2F2F2] bg-white p-6 shadow-[0_18px_70px_rgba(15,23,42,0.05)]'>
                            <div className='absolute right-4 top-4'>
                                <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${badgeClass}`}>
                                    {product.tag}
                                </span>
                            </div>
                            <div className='border border-[#F2F2F2] rounded-full p-3 w-fit mb-3'>
                                <img src={product.icon} alt="" />
                            </div>
                            <div>
                                <h3 className='text-2xl font-semibold text-[#111827] mb-3'>{product.name}</h3>
                                <p className='text-sm leading-6 text-[#6b7280] mb-4'>{product.description}</p>
                                <p className='text-3xl font-bold text-[#111827]'>
                                    ${product.price}
                                    <span className='ml-2 text-base font-medium text-[#6b7280]'>/{product.period}</span>
                                </p>
                            </div>
                            <ul className='mt-6 space-y-3 text-sm text-[#4b5563]'>
                                {
                                    product.features.map((feature, index) => (
                                        <li key={index} className='flex gap-0.5'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 mt-0.5 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                            <span>{feature}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                            <div className='mt-8'>
                                <button className={`btn w-full ${inCart ? 'btn-outline btn-disabled rounded-3xl' : 'myBtn'}`} onClick={() => onAddToCart(product)} disabled={inCart}>
                                    {
                                        inCart ? 'Added to cart' : 'Buy Now'
                                    }
                                </button>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default ProductsCard;
