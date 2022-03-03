import React from 'react';
import arrow from "../../data/images/icon-arrow-down.svg";

const Hero = () => {
	return (
		<div className='showcase'>
			<div className="h-[512px] md:h-[720px] flex flex-col items-center justify-center">
				<h1 className="text-center text-5xl uppercase text-white font-extrabold tracking-widest lg:text-7xl ">
					We are creatives
				</h1>
					<img src={arrow} alt="arrow" className="mt-20" />
			</div>
		</div>
	);
};

export default Hero;
