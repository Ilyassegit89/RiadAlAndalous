import img4 from '../assets/4.jpeg'
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen w-full bg-[#fee7d5] ">
        <div className='flex md:flex-row flex-col mx-auto w-full h-full gap-8 '>
            <div className='basis-3/5 md:py-28 md:pl-16 p-4 '>
              <h1 className="uppercase text-3xl font-normal py-5 tracking-wide">{t('AproprosSection.FirstHeader')}</h1>
              <h1 className="uppercase font-bold text-3xl font-serif mb-6 relative after:content-[''] after:w-full after:h-[5px] after:bg-[#252525] after:bottom-[-7px] after:left-0 after:absolute before:content-[''] before:w-full before:h-[1px] before:bg-[#252525] before:bottom-0 before:left-0 before:absolute">{t('AproprosSection.SecondHeader')}</h1>
              <h1 className='text-2xl mb-6 italic'>Riad Al Andalous </h1>
              <div className='flex flex-wrap lg:flex-nowrap text-lg gap-4'>
                  <div className='lg:basis-1/2'>
                          <p>{t('AproprosSection.Paragraphs.firstParag')}</p>
                  </div>
                  <div className='pt-5 lg:basis-1/2'>
                            <p>{t('AproprosSection.Paragraphs.secondParag')}</p>
                  </div>
              </div>

                <div className='mt-16 '>
                    <a href='' className='uppercase text-black font-bold cursor-pointer border-4 border-black p-4 hover:bg-[#f26d35] hover:text-white hover:border-4 hover:border-[#f26d35]'>{t('AproprosSection.Button')}</a>

                </div>
            </div>
            <div className='basis-2/5 h-full'>
                <img src={img4} className='w-full h-full '/>

            </div>
        </div>
    </div>
  )
}

export default About;
