import React from 'react'
import { useTranslation } from 'react-i18next';


const AndalousSect1 = () => {
  const { t } = useTranslation();


  return (
    <div className='min-h-[70vh] bg-black w-full py-7 flex flex-col justify-center '>
      
        <div className='text-white h-full mx-auto max-w-[950px]  px-2 relative'>
          
              <div className='w-[100px] h-[100px] absolute top-0 right-0 opacity-70'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 360" fill="#FFFFFF"><path d="M318.9 87c-4.8-124.8-111.8-37.7-139.8 28C151-38.8 20.3 39.8 43.7 140.2c6.6 28.3 91.6 178.6 119.6 195.6 3.4 2.1 8-2 20-14 40.5-34.4 141-148 135.6-234.8zm-72.6 138.8c-17.6 25.2-82.4 89.9-82.3 90.1-33.2-43-98.7-144.1-106.8-197.9-2.6-17.2 5-34.7 15.2-48.6 43.2-57.9 77.2-7.9 87.9 43.6 7.1 25.9 6 26.3 7.9 29.2 3.3 5 10.2 6.2 15.3 1.6 3.6-6.7 45.3-94.5 91.1-103.8 9.1-2.1 16.7 4 20.6 12 3.2 8 4 15 5 23 7.1 53.6-23.9 107.8-53.9 150.8z"></path></svg>

              </div>
              <div className='w-[100px] h-[100px] absolute top-0 left-0'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 350" fill="#F26D35"><path d="M322.6 187.4c-30.5-2.9-64.5 1.9-91.3-16.3-28-22.4-40.1-60.3-41.2-95.2-.6-16 2.2-31.9 2.7-47.8-2.8-12.7-20-7.5-18.1 4.7-6.2 61.9-16.1 138.9-88.8 154.5-9 1.8-36.4-1.9-49.6-3.4-5.2-.6-14 .7-13.7 7.4.2 4.8 5.9 7.8 12.8 8.8s23.5 2.5 36.3 4.3 32.6 10.3 47.9 17.7c30.7 13.2 50.2 51.9 49.5 85.8.8 7.1-4.3 17.9 5.2 20.7 12.9 3.1 11.8-12.4 14.5-20.6 3-10.9 6.1-21.7 9.5-32.4 8.6-34.3 36.5-60.2 70.4-69 22-5.8 45.5-3.2 51.7-4.2 7.9-.9 9.7-12.2 2.2-15zm-141.7 86.2c-8.1-25.5-28.1-53.6-51.6-64.9-8-4.2-16.4-7.6-24.9-10.9 40.6-13.4 63.4-42.2 73.7-81.8 9.6 35.6 32.5 71.9 70.5 80.6-33.6 13.3-58.9 42-67.7 77z"></path></svg>
              </div>
            <h1 className=" mx-28 text-center text-xl md:text-4xl font-serif relative after:content-[''] after:h-[5px] after:w-full after:absolute after:bg-white after:left-0 after:bottom-[-25px] before:content-[''] before:w-full before:h-[1px] before:absolute before:bg-white before:bottom-[-15px] before:left-0">{t('AndalousSect1.FirstHeader')}</h1>
            <p className='text-center py-16 text-xs'>{t('AndalousSect1.SecondHeader')}</p>
            <div className='flex md:flex-nowrap flex-wrap pt-7 '>
              <div className='text-center space-y-4'>
                <h1 className='font-bold'>{t('AndalousSect1.Divs.firstDiv.FirstHeader')}</h1>
                  <p className='leading-8'>{t('AndalousSect1.Divs.firstDiv.paragraph')}
                    </p>
              </div>
              <div className='text-center space-y-4'>
              <h1 className='font-bold'>{t('AndalousSect1.Divs.secondDiv.FirstHeader')}</h1>
              <p className='leading-8'>{t('AndalousSect1.Divs.secondDiv.paragraph')}</p>

              </div>
            </div>

        </div>
    </div>
  )
}

export default AndalousSect1
