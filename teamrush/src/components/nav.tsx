export default function Nav() {
	const link1 = "https://odyssey.wildcodeschool.com/quests";
	const link2 = "https://odyssey.wildcodeschool.com/quests";
	return (
		<nav>
			<ul>
				<li>
					<a href={link1}>Home</a>
				</li>
				<li>
					<a href={link2}>About</a>
				</li>
			</ul>
		</nav>
	);
}
