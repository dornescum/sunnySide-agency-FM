import React from 'react';
import cherry from "../../data/images/desktop/image-graphic-design.jpg";
import orange from "../../data/images/desktop/image-photography.jpg";

const SectionThree = () => {
	return (
		<section className="lg:flex flex-col lg:flex-row items-center justify-center">

			<div className="flex justify-center items-center w-full lg:w-1/2 h-full  relative">
				<img src={cherry} alt="picture" className="object-cover h-full w-full min-h-[400px]"/>
				<div className="absolute bottom-0 flex flex-col items-center mx-2 xl:mx-60 text-graphicDesignText
				font-normal xl:font-medium">
					<p className="py-1 py-8 md:py-8 lg:py-0 xl:pt-6 xl:pb-2 font-bold text-2xl xl:text-3xl ">Graphic design</p>
					<p className="pt-1 pb-8 px-6 md:px-24 xl:px-12 md:pt-4 md:pb-16 text-center xl:pt-8 xl:pb-20 text-sm xl:text-lg">Great
						design makes you memorable. We deliver artwork that underscores your brand message and
						captures potential clients’ attention.</p>
				</div>


			</div>

			<div className="flex justify-center items-center w-full lg:w-1/2 h-full relative">
				<img src={orange} alt="picture" className="object-cover h-full w-full min-h-[400px]"/>
				<div className="absolute bottom-0 flex flex-col items-center mx-2 xl:mx-60 text-photographyText font-normal xl:font-medium">
					<p className="py-1 py-8 md:py-8 xl:pt-6 xl:pb-2 font-bold text-2xl xl:text-3xl ">Photography</p>
					<p className="pt-1 pb-8 px-6 md:px-24 xl:px-12 md:pt-4 md:pb-16 text-center xl:pt-8 xl:pb-24 text-sm xl:text-lg">
						Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
				</div>
			</div>


		</section>

	);
};

export default SectionThree;
