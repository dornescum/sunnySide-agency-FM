import React from 'react';
import {gridDesktop} from "../../data/gridImages";

const GridImages = () => {
	return (
		<section className='grid grid-cols-2 md:grid-cols-4 mt-10'>

			{gridDesktop.map(({ id, image, name, desc, title }) => (
				<article key={id}  className="">
					<img
						src={image}
						alt={name}
						className=""
					/>
				</article>
			))}
		</section>
	);
};

export default GridImages;
