import maps from '../assets/mapsriad.jpg';
import {BiLogoFacebook} from 'react-icons/bi';
import {AiOutlineInstagram} from 'react-icons/ai';
import {FaMapMarkedAlt} from 'react-icons/fa';
import LanguageSelector from './LanguageSelector';

const Footer = () => {
  return (
    <div className="min-h-[500px] w-full flex flex-col gap-8 pb-16 bg-[#eee]">
        <div className=' py-16 max-w-[1000px] mx-auto ' id='stylingBg'>
            <div className=" flex md:flex-row flex-col  gap-8 pb-5"> 
            <div className="flex flex-col items-center">
                <h1 className="font-serif text-2xl font-semibold">Adresse Postale</h1>
                <a className='underline underline-offset-2 text-[#FFFFFF]' target='_blank' href='https://www.google.com/maps/place/RIAD+ANDALOUSSE/@33.5821397,-7.5521334,17z/data=!4m6!3m5!1s0xda7cd7781248847:0xfb28e9db1caf057a!8m2!3d33.5822854!4d-7.550444!16s%2Fg%2F11kc6_289z?hl=en&entry=ttu'>Riad Andalous Food</a>
                <img src={maps} className='w-[400px] h-[250px] pt-4 rounded-full'/>
            </div>
            <div className="flex flex-col items-center">
                <h1 className="font-serif text-2xl font-semibold">Réservez votre table</h1>
                <a className='underline underline-offset-2 text-[#FFFFFF]'  href=''>+212 0688605515</a>
                <a className='underline underline-offset-2 text-[#FFFFFF]' href=''>conatct@email.com</a>

            </div>
            <div className="flex flex-col items-center">
                <h1 className="font-serif text-2xl font-semibold">Horaire d'ouverture</h1>
                <a className='underline underline-offset-2 text-[#FFFFFF]' href=''>Riad Andalous Food</a>
                
            </div>
      </div>

      <div className='max-w-[320px] mx-auto px-4'>
          <div className='flex justify-between gap-4'>
          <a href="" className='border-2 border-white rounded-full p-2 '><BiLogoFacebook className='hover:text-blue-500 text-white' /></a>
          <a href="" className='border-2 border-white rounded-full p-2 '><AiOutlineInstagram className='hover:text-yellow-500 text-white' /></a>
          <a href="https://www.google.com/maps/place/RIAD+ANDALOUSSE/@33.5825478,-7.5505215,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipP-0pPepJUYp2nQ8rxsG6eu3dwmCajsgowNhqMu!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipP-0pPepJUYp2nQ8rxsG6eu3dwmCajsgowNhqMu%3Dw203-h200-k-no!7i720!8i712!4m9!3m8!1s0xda7cd7781248847:0xfb28e9db1caf057a!8m2!3d33.5822854!4d-7.550444!10e5!14m1!1BCgIYIA!16s%2Fg%2F11kc6_289z?entry=ttu" target='_blank' className='border-2 border-white rounded-full p-2 '><FaMapMarkedAlt className='hover:text-blue-500 text-white' /></a>

          </div>
          <LanguageSelector />

      </div>
        </div>
    </div>
  )
}

export default Footer
