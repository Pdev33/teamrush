interface Dev {
    name: string
    imgSrc?: string
}

interface DevNavProps {
    devIndex: number;
    setDevIndex: (index: number) => void;
    devList: Dev[];
    
  }
export default function DevNavBar ({devList, setDevIndex }: DevNavProps) {
    const onDevClick = (index: number) => {
        const devSelected = (devList[index].name)
        if (devSelected === 'Aurelien') {
            alert ("Chaud Maggle !!")     
        }
        setDevIndex(index)
    }
    return (
        <>
       {devList.map((dev, index) => (
          <button
          key={index}
          type="button"
          onClick={() => onDevClick(index)}
          >{dev.name}
          </button>
        ))}
        </>
    );
}
