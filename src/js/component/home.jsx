import React from "react";


import Card from "./card"
import Navbar from "./navbar";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";


const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>
			<div className="Container">
				<Jumbotron/>
				<div className="d-sm-flex">
					<Card title={"Mi primer proyecto de react"} description={"Gracias por el acompañamiento y la ayuda"} buttonURL={"www.google.com"} label={"Ir a Google"} />
					<Card title={"Mi acompañamiento"} description={"Gracias a Juan y Sergio por el acompañamiento"} buttonURL={"www.facebook.com"} label={"Ir a Google"} />
					<Card title={"Mi proceso"} description={"Este camino no es facil pero hacen que sea más ameno"} buttonURL={"www.instagram.com"} label={"Ir a Google"} />
					<Card title={"Mi sentimiento"} description={"Me siento feliz de estar transitandolo"} buttonURL={"www.bootstrap.com"} label={"Ir a Google"} />
				</div>
				<Footer/>
			</div>
		</div>
	);
};

export default Home;
