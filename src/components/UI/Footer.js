import React from 'react';
import facebook from '../../data/images/icon-facebook.svg'
import instagram from "../../data/images/icon-instagram.svg"
import pinterest from "../../data/images/icon-pinterest.svg"
import twitter from "../../data/images/icon-twitter.svg"
import footerLogo from "../../data/images/footer-logo.svg"

const Footer = () => {
	return (
		<footer className="footer p-5 bg-footerGreen">
			<div>
				<img
					src={footerLogo}
					alt="sunnyside landing page"
					className="block mx-auto pt-8 pb-6"
				/>
			</div>

			<ul className="flex items-center justify-center mt-5 mb-12 text-graphicDesignText">
				<li className="mx-6">
					<button>About</button>
				</li>
				<li className="mx-6">
					<button>Services</button>
				</li>
				<li className="mx-6">
					<button>Projects</button>
				</li>
			</ul>

			<ul className="flex items-center justify-center my-5">
				<li className="mx-4 cursor-pointer">
					<img src={facebook} alt="facebook" />
				</li>
				<li className="mx-4 cursor-pointer">
					<img src={instagram} alt="instagram" />
				</li>
				<li className="mx-4 cursor-pointer">
					<img src={twitter} alt="twitter" />
				</li>
				<li className="mx-4 cursor-pointer">
					<img src={pinterest} alt="pinterest" />
				</li>
			</ul>

			<div className="mt-12">
				Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
				Coded by <a href="https://dornescu.ro/" target="_blank" className='text-white opacity-40'>Mihai Dornescu.</a>
			</div>
		</footer>
	);
};

export default Footer;
