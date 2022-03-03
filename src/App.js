import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import Hero from "./components/Hero/Hero";
import './index.css';
import SectionOne from "./components/SectionOne/SectionOne"; // fixme tailwind no autocomplete
import SectionTwo from './components/SectionTwo/SectionTwo'


function App() {
	return (
		<main className="relative overflow-hidden font-fraunces">
			<Header/>
			<Hero/>
			<SectionOne />
			<SectionTwo />
			<Footer/>
		</main>
	);
}

export default App;
