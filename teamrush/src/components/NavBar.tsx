interface NavBar {
	name: string;
	imgSrc?: string;
}

export default function NavBar({
	currentIndex,
	setCurrentIndex,
	devList,
}: NavBarProps) {
	const handleClick = (index) => {
		if (devList[index].name === "Aurelie") {
			alert("chauuuuud gros* ah ouaiiiiiiis ma gueule !!!");

			setCurrentIndex(index);
		}
		return (
			<nav>
				{devList.map((dev, index) => (
					<button
						key={dev.name}
						type="button"
						onClick={() => handleClick(index)}
					>
						{dev.name}
					</button>
				))}
			</nav>
		);
	};
}
