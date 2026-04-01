import React from 'react';

const CartSection = ({ cartItems, onRemove, onCheckout }) => {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    return (
        <section className='mt-12'>
            <div className='mx-auto w-full max-w-5xl rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)]'>
                <div className='flex flex-col gap-3 border-b border-[#E5E7EB] pb-6 sm:flex-row sm:items-end sm:justify-between'>
                    <div>
                        <h3 className='text-3xl font-semibold text-[#111827]'>Your Cart</h3>
                        <p className='mt-2 text-sm text-[#6b7280]'>{cartItems.length} selected product(s)</p>
                    </div>
                    <div className='flex flex-wrap items-center gap-3'>
                        <div className='rounded-full bg-[#f5f3ff] px-4 py-2 text-sm font-semibold text-[#4338ca]'>{cartItems.length} items</div>
                    </div>
                </div>

                {cartItems.length === 0 ? (
                    <div className='flex min-h-65 flex-col items-center justify-center rounded-[28px] bg-[#f8fafc] p-12 text-center'>
                        <p className='text-xl font-semibold text-[#111827]'>Your cart is empty</p>
                        <p className='mt-3 text-sm text-[#6b7280]'>Add products to the cart and they will appear here.</p>
                    </div>
                ) : (
                    <>
                        <div className='mt-8 space-y-4'>
                            {cartItems.map((item) => (
                                <div key={item.id} className='flex flex-col gap-4 rounded-[28px] border border-[#E5E7EB] bg-[#fafbff] p-6 sm:flex-row sm:items-center sm:justify-between'>
                                    <div className='flex items-start gap-4'>
                                        {item.icon && (
                                            <img src={item.icon} alt={item.name} className='h-15 w-15 rounded-full bg-[#eef2ffc5] object-contain p-3' />
                                        )}
                                        <div>
                                            <p className='text-lg font-semibold text-[#111827]'>{item.name}</p>
                                            <p className='mt-1 text-sm text-[#6b7280]'>${item.price} / {item.period}</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <button type='button' className='btn btn-ghost text-error normal-case' onClick={() => onRemove(item.id)}>
                                            Remove
                                        </button>
                                        <p className='text-lg font-bold text-[#111827]'>${item.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='mt-8 rounded-[28px] border border-[#E5E7EB] bg-[#ffffff] p-6'>
                            <div className='flex items-center justify-between'>
                                <p className='text-sm uppercase tracking-[0.18em] text-[#6b7280]'>Total</p>
                                <p className='text-3xl font-semibold text-[#111827]'>${total}</p>
                            </div>
                            <button type='button' onClick={onCheckout} className='mt-6 w-full rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] px-8 py-4 text-base font-semibold text-white hover:opacity-85 cursor-pointer'>
                                Proceed To Checkout
                            </button>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default CartSection;
