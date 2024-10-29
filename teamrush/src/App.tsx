<<<<<<< HEAD
import { useState, useEffect } from 'react'
import './App.css'
import DevCard from './components/DevCard';
import DevNavBar from './components/DevNav';
=======
import { useState, useEffect } from "react";
import "./App.css";
import DevCard from "./components/devCard";
import DevNavBar from "./components/devNav";
import Nav from "./components/Nav";
import Footer from "./components/footer";
>>>>>>> a4d3ca08f63b6c7d699d238f4665c1dd5fb445af

function App() {
	useEffect(() => {
		alert("Hello Wilder ! Mets tes lunettes on va t'éblouir 😎 (ou pas)");
	}, []);

	const [devIndex, setDevIndex] = useState(0);
	const devList = [
		{
			name: "Aurelien",
			imgSrc: "./images-indiv/_MG_8012.JPG",
			description: "Développeur frontend passionné par le design moderne.",
		},
		{
			name: "Aghiles",
			imgSrc: "./images-indiv/_MG_8004.JPG",
			description: "Backend ninja avec un penchant pour les API robustes.",
		},
		{
			name: "Pierre",
			imgSrc: "./images-indiv/_MG_8017.JPG",
			description: "Polyvalent et toujours prêt pour de nouveaux défis.",
		},
		{
			name: "Raph le B",
			imgSrc: "./images-indiv/_MG_8008.JPG",
			description: "Maître des chats et du code asynchrone.",
		},
	];

	return (
		<>
			<Nav />
			<h1>Team Dev Wild Code School 2024</h1>
			<div>
				<DevCard
					name={devList[devIndex].name}
					imgSrc={devList[devIndex].imgSrc}
					description={devList[devIndex].description}
				/>
			</div>

			<DevNavBar
				devIndex={devIndex}
				setDevIndex={setDevIndex}
				devList={devList}
			/>
			<Footer />
		</>
	);
}
<<<<<<< HEAD
export default App;
import { useState, useEffect } from 'react';
import './App.css';
import DevCard from './components/devCard';
import DevNavBar from './components/devNav';

function App() {
  useEffect(() => {
    alert("Hello Wilder ! Mets tes lunettes on va t'éblouir 😎 (ou pas)");
  }, []);

  const [devIndex, setDevIndex] = useState(0);
  const devList = [
    {
      name: "Aurelien",
      imgSrc: "./images-indiv/_MG_8012.JPG",
      description: "Développeur frontend passionné par le design moderne.",
    },
    {
      name: "Aghiles",
      imgSrc: "./images-indiv/_MG_8004.JPG",
      description: "Backend ninja avec un penchant pour les API robustes.",
    },
    {
      name: "Pierre",
      imgSrc: "./images-indiv/_MG_8017.JPG",
      description: "Polyvalent et toujours prêt pour de nouveaux défis.",
    },
    {
      name: "Raph le B",
      imgSrc: "./images-indiv/_MG_8008.JPG",
      description: "Maître des chats et du code asynchrone.",
    },
    ]
    return (
    <>
    <div>
      <DevCard
        name= {devList[devIndex].name}
        imgSrc= {devList[devIndex].imgSrc} />
    </div>
      
      <DevNavBar 
        devIndex={devIndex} 
        setDevIndex={setDevIndex} 
        devList={devList}/>
        </>
  );
}

export default App;

=======

export default App;
>>>>>>> a4d3ca08f63b6c7d699d238f4665c1dd5fb445af
