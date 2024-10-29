import { useState, useEffect } from "react";
import "./App.css";
import DevCard from "./components/DevCard";
import DevNavBar from "./components/DevNav";
import Nav from "./components/Nav";

function App() {
	useEffect(() => {
		alert("Hello Wilder ! Mets tes lunettes on va t'éblouir 😎 (ou pas)");
	}, []);
	const [devIndex, setDevIndex] = useState(0);
	const devList = [
		{ name: "Aurelien", imgSrc: "./images-indiv/_MG_8012.JPG" },
		{ name: "Aghiles", imgSrc: "./images-indiv/_MG_8004.JPG" },
		{ name: "Pierre", imgSrc: "public/images-indiv/_MG_8017.JPG" },
		{ name: "Raph le B", imgSrc: "./images-indiv/_MG_8008.JPG" },
	];
	return (
		<>
			<Nav />
			<h1 className="title">Team Dev Wild Code School 2024</h1>
			<div>
				<DevCard
					name={devList[devIndex].name}
					imgSrc={devList[devIndex].imgSrc}
				/>
			</div>

			<DevNavBar
				devIndex={devIndex}
				setDevIndex={setDevIndex}
				devList={devList}
			/>
		</>
	);
}
export default App;
