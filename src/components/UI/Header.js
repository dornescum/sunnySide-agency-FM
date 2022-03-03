import React, {useState} from 'react';
import SideBar from "./SideBar";
import Logo from "../Logo";
import {navbar} from "../../data/navbarLinks";
import Navbar from "./Navbar";
import {AiOutlineMenu} from "react-icons/ai";



const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className='absolute w-full flex items-center justify-between p-5 z-10'>
			<Logo />
			{isOpen && <SideBar />}
			<div className='flex items-center justify-center pr-8'>
				<Navbar links={navbar}/>
				<button className='bg-white hover:bg-yellow hover:text-white  px-4 py-2 rounded-[25px] font-bold hidden xl:block
				transition ease-in-out duration-300'>Contact</button>
			</div>
			<div className="xl:hidden">
				<button onClick={() => setIsOpen(!isOpen)} >
					<AiOutlineMenu color='#000'/>
				</button>
			</div>
		</header>
	);
};

export default Header;
