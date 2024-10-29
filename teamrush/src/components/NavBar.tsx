interface Dev {
	name: string;
	imgSrc?: string;
}

interface NavBarProps {
	currentIndex: number;
	setCurrentIndex: (index: number) => void;
	devList: Dev[];
}

function NavBar({ devList, setCurrentIndex }: NavBarProps) {
	const handleClick = (index: number) => {
		if (devList[index].name === "Aurelien") {
			alert("chaud ma gueeeeuuuuul!!!");
		}
		if (devList[index].name === "Raph le B") {
			alert("Chat GTP c'est la vie !");
		}
		if (devList[index].name === "Aghiles") {
			alert(
				"PrrrrrrrrrrrrrA dédicasse a personne tu peut pas nos tuer on est déja mort",
			);
		}
		if (devList[index].name === "Pierre") {
			alert("Paul de la copole ");
		}
		setCurrentIndex(index);
	};
	return (
		<nav>
			{devList.map((dev, index) => (
				<button key={dev.name} type="button" onClick={() => handleClick(index)}>
					{dev.name}
				</button>
			))}
		</nav>
	);
}

export default NavBar;
