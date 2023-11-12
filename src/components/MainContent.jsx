import { useEffect, useState } from 'react'
import img1 from '../assets/slideImgs/1.jpg'
import img2 from '../assets/slideImgs/heroImg.jpg'
import { useTranslation } from 'react-i18next';
import './style.css'
import downloadPdf from '../../functions/DownloadMenu'



const MainContent = () => {

    const { t } = useTranslation();
    const [currentSlide, setCurrentSlide] = useState(0);

    const images = [
        {img: img1 , paragraphtxt: t('MainContent.FirstSlide.Pragraph') , headerTxt : t('MainContent.FirstSlide.Header'), buttonTxt : t('MainContent.FirstSlide.Button')},
        {img : img2, paragraphtxt:  t('MainContent.SecondSlide.Pragraph'), headerTxt :  t('MainContent.SecondSlide.Header'), buttonTxt :  t('MainContent.SecondSlide.Button')},
    
    ];

    useEffect(() => {
        const interval = setInterval( () => {
            setCurrentSlide((prevslide) => (prevslide + 1) % images.length  ) 

        }, 5000);

        return () => clearInterval(interval)
    }, [])
    

  return (
    <div className="w-full h-screen mt-[-156px] overflow-hidden">
            {images.map((image, index) => (
        <div key={index} className={`w-full h-full  ${index === currentSlide ? ' opacity-100  ' : 'opacity-0'} absolute `}>
            <img src={image.img} className=" w-full h-full object-cover brightness-50" alt={`Slide ${index}`} />

            

            <div className='absolute top-[60%] left-[50%]   text-white  bg-black/50  min-h-[200px] w-full md:max-w-[1200px]  p-4 transition-opacity duration-500 delay-200' style={{transform : 'translate(-50%, -50%)'}}>
                <div className='flex flex-col items-center py-4 space-y-5 w-full'>
                    <h1 className='text-4xl md:text-5xl font-serif'>{image.headerTxt}</h1>
                        <p className='text-xl md:text-2xl font-serif text-center'>{image.paragraphtxt}</p>
                        <button type='button' onClick={downloadPdf} className='uppercase font-serif  border-2 border-white hover:bg-[#f26d35]   hover:text-white  hover:border-[#f26d35] p-2'>{image.buttonTxt}</button>
                </div>
            </div>

            
        </div>
    ))}
            
    </div>
  )
}

export default MainContent
