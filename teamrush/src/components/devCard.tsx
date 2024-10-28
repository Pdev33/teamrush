
interface DevCardprops {
    name: string;
    imgSrc?: string;
    }
    
    function DevCard({ name, imgSrc } : DevCardprops) {
        return (
            <figure>
            {(imgSrc) ? 
            (<img className="devPictures" src={imgSrc}  alt={name} />) : (<p>???</p>)}
            <figcaption>{name}</figcaption>
           </figure>
      );
    }
    export default DevCard; 