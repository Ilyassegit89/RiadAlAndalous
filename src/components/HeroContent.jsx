import bgImg from '../assets/slideImgs/heroImg.jpg'
import { useTranslation } from 'react-i18next';


const HeroContent = () => {
  const { t } = useTranslation();

  return (
    <div className='w-full h-[50vh] mt-[-156px]'>
        <div className='h-full relative overflow-hidden text-white'>
            <img src={bgImg} className='h-full w-full object-cover object-center brightness-50' style={{backgroundImage : `url(${bgImg})` }}/>
            <div className="absolute top-[60%] left-[50%] min-w-[200px] flex flex-col items-center"style={{transform : 'translate(-50%, -50%)'}}>
                    <h1 className='md:text-6xl text-4xl font-serif'>{t('AboutPage.HeroContent.HeaderOne')}</h1>
                    <p className='opacity-80 '>Riad Andalous Food</p>
            </div>

        </div>
    </div>
  )
}

export default HeroContent
