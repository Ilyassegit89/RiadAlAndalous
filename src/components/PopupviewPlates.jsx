import { AiOutlineClose} from 'react-icons/ai';
import PlatesSlider from './PlatesSlider';

const containerStyles = {
  width : "470px",
  height: "768px",
  margin: "0 auto"
}

const PopupviewPlates = ({isOpen, OnClose}) => {
  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center text-white z-50 ${isOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-gray-800 opacity-50"></div>
           
            <div style={containerStyles}>
                <PlatesSlider />

            </div>        
        <AiOutlineClose className='absolute top-[5em] right-0 cursor-pointer hover:text-red-600 text-white' onClick={OnClose}  size={30} />

    </div>
  )
}

export default PopupviewPlates
