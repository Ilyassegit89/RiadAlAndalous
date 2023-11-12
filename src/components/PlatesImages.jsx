import { useState, createContext } from 'react';
import images from '../Data/GalerieImages';
import {BiSearch} from 'react-icons/bi';
import PopupviewPlates from './PopupviewPlates';
import HatCheff from '../assets/HatCheff.png' 

export const UserContext = createContext(null);

const PlatesImages = () => {
   const[isModelOpen, setModelOpen] = useState(false);
   const[userOne, setUserOne] =  useState(0);

    const modelOpen = (data) =>{
        document.body.style.overflow = 'hidden';
        setModelOpen(true);
        setUserOne(data)
      }
      const closeModal = () =>{
    
        setModelOpen(false);
        document.body.style.overflow = '';
    
        
    
      } 
     

  return (
          <div className='min-h-screen bg-[#fee7d5] text-black py-16 px-8 overflow-hidden'>
            
        <div className='mx-auto max-w-[1000px] '>
            
        <div className='max-w-[900px] mx-auto '>
          
          <h1 className='text-center uppercase text-3xl tracking-wide  font-normal py-5 relative' id='beforeClass' >Riad Al Andalous food : <span className="text-[#f26d35]">en images</span></h1>
          <p className=' py-7'>Riad al Andalous Food est un réel régal pour les yeux et les papilles. Parcourez notre galerie d’images et plongez dans un univers riche en saveurs !</p>
        </div>
        
        
        <div className='grid md:grid-cols-4  gap-4 py-7'>
            {images.map((image) => (
        <div key={image.id}  className=' h-full w-full group relative overflow-hidden ' onClick={() => modelOpen(image.id)} >
            <img src={image.img}   className=' w-full h-full transition-transform transform scale-100 group-hover:scale-110'   />
            <div className="hidden group-hover:flex justify-center items-center absolute inset-0  text-white bg-black bg-opacity-70 cursor-pointer">
              <BiSearch size={25}  className='text-white bg-[#f26d35] rounded-full relative slide-image-beg' />
            </div>
        </div>
      ))}
     
      <UserContext.Provider value={{userOne,setUserOne}}>
        <PopupviewPlates  isOpen={isModelOpen} OnClose={closeModal}/>  

      </UserContext.Provider>
        </div>

          

            <div className='max-w-[100px] mx-auto py-7'>
                <a href='/' className='font-bold cursor-pointer border-4 border-black p-4 hover:bg-[#f26d35] hover:text-white hover:border-4 hover:border-[#f26d35] w-full text-center'>Galerie</a>

            </div>
        </div>
    </div>
  )
}



export default PlatesImages;
