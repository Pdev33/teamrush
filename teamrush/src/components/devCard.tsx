
import { useState } from 'react';

interface DevCardProps {
    name: string;
    imgSrc?: string;
    description: string;  // Ajoutez une prop pour le texte à afficher au verso
}

function DevCard({ name, imgSrc, description }: DevCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);  // État pour gérer la rotation

    // Fonction pour basculer entre face avant et arrière
    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <figure onClick={handleFlip} className={`devCard ${isFlipped ? "flipped" : ""}`}>
            {isFlipped ? (
                // Affiche la description lorsque la carte est retournée
                <figcaption>{description}</figcaption>
            ) : (
                // Affiche l'image et le nom lorsque la carte est face visible
                <>
                <img className="devPictures" src={imgSrc} alt={name} />
                <figcaption>{name}</figcaption>
                </>
            )}
        </figure>
    );
}

export default DevCard;
 