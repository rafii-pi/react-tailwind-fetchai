import Navbar from "../components/Navbar";
import Hero from "../components/Hero.jsx";
import Squares from "../components/Squares.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
	return (
		<div className="">
			<Navbar subNav="Gasken" />
			<div className="pt-25 mx-4">
				<Hero />
			</div>
			<Footer />
		</div>
	);
};

export default Home;
