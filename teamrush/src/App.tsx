import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import DevCard from "./components/devCard";
import Nav from "./components/nav";

function App() {
	const [devIndex, setDevIndex] = useState(0);
	const devList = [
		{ name: "Aurelien", imgSrc: "./image-indiv/_MG_8012.JPG" },
		{ name: "Aghiles", imgSrc: "./image-indiv/_MG_8004.JPG" },
		{ name: "Pierre", imgSrc: "./image-indiv/_MG_8017.JPG" },
		{ name: "Raph le B", imgSrc: "./image-indiv/_MG_8008.JPG" },
	];
	return (
		<>
			<Nav />
			<DevCard
				name={devList[devIndex].name}
				imgSrc={devList[devIndex].imgSrc}
			/>
			<NavBar
				currentIndex={devIndex}
				setCurrentIndex={setDevIndex}
				devList={devList}
			/>
		</>
	);
}

export default App;
