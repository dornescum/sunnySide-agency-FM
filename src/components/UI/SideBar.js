import React from 'react';
import {navbar} from "../../data/navbarLinks";

const SideBar = () => {
	// const [links, setLinks] = useState(navbar);
	return (
		<div className="absolute bg-white py-5 px-2 m-4 top-16 -left-4 triangle
		rounded-sm shadow-lg text-center  xl:hidden flex flex-col justify-center items-center w-full">

			<ul className="">
				{navbar.map(({id, title}) => (
					<li key={id} className="my-3 text-stone-500">
						{title}
					</li>
				))}
			</ul>


			<button className='bg-[#fad400] px-4 py-2 rounded-[25px] font-bold'> Contact</button>

		</div>
	);
};

export default SideBar;
