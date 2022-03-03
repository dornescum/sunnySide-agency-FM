import React from 'react';
import transform from '../../data/images/desktop/image-transform.jpg';

const SectionOne = () => {
	return (
		<section className="lg:flex flex-col lg:flex-row-reverse items-center justify-center">
			<div className="flex justify-center items-center w-full lg:w-1/2 h-full">
				<img src={transform} alt="picture" className="object-fill h-full w-full"/>
			</div>

			<div className="p-5  md:py-2 md:px-10 xl:py-20 xl:px-24  text-center lg:text-left lg:w-1/2 ">
				<p className="text-3xl my-5 lg:text-4xl xl:text-7xl font-bold leading-tight lg:leading-relaxed">Transform your  brand</p>
				<p className="my-8 text-stone-500 text-base md:text-base xl:text-2xl tracking-wider leading-relaxed">
					We are a full-service creative agency specializing in helping brands
					grow fast. Engage your clients through compelling visuals that do
					most of the marketing for you.
				</p>
				<div className="cursor-pointer mx-1 my-2">
					<a className="my-5 text-lg lg:text-2xl uppercase text-center mx-auto z-10 font-bold">
						Learn more
					</a>
					<div className='border-b-[12px]  border-yellow w-36  lg:w-44 z-0 -translate-y-3 opacity-20 rounded-md mx-auto lg:mx-0
					  duration-300 ease-in-out transition'></div>
				</div>

			</div>
		</section>
	);
};

export default SectionOne;
