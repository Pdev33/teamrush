
interface DevCardprops {
    name: string;
    imgSrc?: string;
    ticker: string;
    }
    
    function DevCard({ name, imgSrc, ticker } : DevCardprops) {
        return (
            <figure>
            {(imgSrc) ? 
            (<img src={imgSrc}  alt={name} />) : (<p>???</p>)}
            <figcaption>{name} {ticker}</figcaption>
           </figure>
      );
    }
    export default DevCard; 