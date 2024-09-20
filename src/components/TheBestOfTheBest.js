import React from 'react';
import config from '../content.config';

const ProductCard = ({ imageUrl, title, description, buttonText }) => (
    <div className='overflow-hidden flex flex-col items-center w-full h-[472px] bg-[#0F172A] border border-[#0F172A] shadow-[0px_25px_50px_-12px_rgba(255,255,255,0.25),0px_0px_15px_rgba(255,255,255,0.07)] rounded-lg z-10'>
        <div
            className='h-[220px] w-full bg-cover bg-center'
            style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className='w-full flex flex-col gap-4 h-[132px] p-8 pb-0'>
            <h3 className='h-[26px] text-[24px] font-bold leading-[110%] text-white'>{title}</h3>
            <label className='h-[58px] text-[18px] font-normal leading-[160%] text-white'>{description}</label>
        </div>
        <div className='flex p-8 h-[120px] w-full'>
            <button className='flex flex-row p-4 gap-4 border-2 border-white rounded-lg w-full justify-center'>
                <img src='/assets/shopping-cart.png'></img>
                <span className='text-[20px] font-medium leading-[24px] tracking-[0.5px] text-white'>{buttonText}</span>
            </button>
        </div>
    </div>
);

const TheBestOfTheBest = () => {
    const { header, products } = config.theBestOfTheBest;

    return (
        <section className="flex flex-col justify-center py-12 px-4 md:p-20 gap-8 md:gap-20 bg-[#0F172A] overflow-hidden">
            <div className="flex flex-col md:flex-row gap-8 md:gap-20 md:h-16 items-center">
                <h2 className="font-extrabold text-[32px] text-center md:text-left md:text-[56px] leading-[110%] text-white">
                    {header.title}
                </h2>
                <button className="box-border flex justify-center items-center py-5 px-6 w-[233px] h-[64px] border-2 border-white rounded-md text-white text-[24px] font-bold leading-[24px] tracking-[0.5px] md:ml-auto">
                    {header.buttonText}
                </button>
            </div>
            <div className="flex flex-row gap-12 relative">
                <div className="absolute w-[1012.71px] md:w-[1358px] h-[393px] md:h-[527px] -left-[328px] md:-left-[35px] 
                top-[615px] md:-top-[31px] z-0 bg-cover bg-center rotate-90 md:rotate-0"
                    style={{ backgroundImage: `url(/assets/backlights.png)` }}></div>
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full">
                    {products.map((product, index) => (
                        <ProductCard
                            key={index}
                            imageUrl={product.imgSrc}
                            title={product.title}
                            description={product.description}
                            buttonText={product.buttonText}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TheBestOfTheBest;