interface DevCardprops {
	name: string;
	imgSrc?: string;
}

function DevCard({ name, imgSrc }: DevCardprops) {
	return (
		<figure>
			<img className="devPictures" src={imgSrc} alt={name} />
			<figcaption>{name}</figcaption>
		</figure>
	);
}
export default DevCard;
