import React from "react";
import Navbar from "./navbar";
import Card from "./card";
import Jumbotron from "./jumbotron";
import Footer from "./footer";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar/>

			<div className="container-xl">
				<Jumbotron/>
				
				<div className="row d-flex justify-content-center">
					<Card/>
					<Card/>
					<Card/>
					<Card/>
			</div>

			</div>
			
			
			
		
			<Footer/>
		</div>



		
		
	);
};

export default Home;
