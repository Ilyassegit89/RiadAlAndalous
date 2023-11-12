import images from "../Data/GalerieImages";
import {SlArrowLeft, SlArrowRight} from 'react-icons/sl';
import { useContext } from "react";
import { UserContext } from "./PlatesImages";

const PlatesSlider = () => {
    const {userOne, setUserOne} = useContext(UserContext);

    const slideStyles = {
        width : "100%",
        height: "100%",
        borderRadius: '10px',
        backgroundSize: 'cover',
        backgroundImage : `url(${images[userOne].img})`,
        
    
    }
    const sliderStyles = {
        height : "100%",
        position: "relative",
    }
    const leftArrowStyles = {
        position : 'absolute',
        top: '50%',
        transform : 'translate(0, -50%)',
        left: '32px',
        cursor : 'pointer',
        zIndex: 1
    }
    const rightArrowStyles = {
        position : 'absolute',
        top: '50%',
        transform : 'translate(0, -50%)',
        right: '32px',
        cursor : 'pointer',
        zIndex: 1,
    
    }

    
    const goToPrevious = () =>{
        const isFirst = userOne === 0 ;
        const newIndex = isFirst ? images.length - 1 : userOne - 1;
        setUserOne(newIndex)
    }
    
    
  return (
    <div  style={sliderStyles}>
        <div style={leftArrowStyles} onClick={() => goToPrevious()}  >
            <SlArrowLeft size={25} />
        
        </div>
        <div style={rightArrowStyles}  onClick={() => setUserOne((prevSlide) => (prevSlide + 1) % images.length )}>
            <SlArrowRight size={25} />
        </div>
            <div style={slideStyles}>
                
            </div>
            <div className="absolute bottom-0 left-[50%] max-w-[200px] bg-black/50"style={{transform : 'translate(-50%, -50%)'}}>
                <p>{`slide ${userOne + 1} from ${images.length}`}</p>
            </div>
    </div>
  )
}

export default PlatesSlider
