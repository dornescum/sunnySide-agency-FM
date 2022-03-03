import React from 'react';

const Navbar = ({links}) => {
	return (
		<div className='hidden xl:block'>
			<ul className='flex'>
				{links.map((el)=>{
					return <li key={el.id} className="my-3 md:my-0 md:mx-6 pr-4 md:text-white
					 hover:text-black transition ease-in-out duration-300 cursor-pointer">{el.title}</li>
				})}
			</ul>

		</div>
	);
};

export default Navbar;
