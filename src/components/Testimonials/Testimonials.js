import React from 'react';
import {testimonials} from "../../data/testimonials";

console.log(testimonials);

const Testimonials = () => {
	return (
		<div className=''>
			<p className='text-center my-12 xl:my-20 text-greyTwo font-bold text-lg xl:text-3xl tracking-widest'>CLIENT TESTIMONIALS</p>
			<div className='flex flex-col md:flex-row mx-1 md:mx-4'>
				{testimonials.map(({ id, image, name, desc, title }) => (
					<article key={id}  className="basis-1/3 min-h-[350px]">
						<img
							src={image}
							alt={name}
							className="w-20 rounded-full block mx-auto mt-10 mb-5"/>
						<p className="text-center mb-5 mx-0 md:mx-1 xl:mx-28 xl:mt-10 leading-loose
						text-greyThree text-base md:text-lg">{desc}</p>
						<h4 className="text-center pt-4 ">{name}</h4>
						<small className="block text-center py-2 text-greyTwo">{title}</small>
					</article>
				))}
			</div>
		</div>
	);
};

export default Testimonials;
