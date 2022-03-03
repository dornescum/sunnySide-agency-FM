import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import Hero from "./components/Hero/Hero";
import './index.css';
import SectionOne from "./components/SectionOne/SectionOne"; // fixme tailwind no autocomplete
import SectionTwo from './components/SectionTwo/SectionTwo'
import SectionThree from "./components/SectionThree/SectionThree";
import Testimonials from "./components/Testimonials/Testimonials";
import GridImages from "./components/GridImages/GridImages";


function App() {
	return (
		<main className="relative overflow-hidden font-fraunces">
			<Header/>
			<Hero/>
			<SectionOne />
			<SectionTwo />
			<SectionThree />
			<Testimonials />
			<GridImages />
			<Footer/>
		</main>
	);
}

export default App;
