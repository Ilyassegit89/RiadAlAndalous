import GlovoPng from '../assets/Glovo.png'
const GlovoCLa = () => {
  return (
    <div className="min-h-[454px] w-full bg-[#eee] py-[100px]  px-4">
            <div className='flex flex-col md:flex-row items-center gap-20 max-w-[1000px] mx-auto  p-4'>
                <div className="">
                    <h1 className="uppercase font-normal text-3xl tracking-wide">Riad Al Andalous EST SUR GLOVO</h1>
                    <p className="italic text-xl pb-6 pt-2">Livraison à domicile</p>
                    <p className='text-lg'>Passez votre commande en ligne via Glovo et faites livrer vos plats préférés directement chez vous, pour une expérience culinaire à portée de main.</p>
                </div>
                <div className='flex flex-col justify-between items-center'>
                    <img className='max-w-[400px] h-[120px]'  src={GlovoPng}/>
                        <a target='_blank' href='https://glovoapp.com/ma/fr/sidi-moumen/restaurant-riad-andalouss/' className='min-w-[200px]  font-bold cursor-pointer border-[5px] border-black p-4 hover:bg-[#ffcc1b] hover:text-[#00a082]  hover:border-[#ffcc1b]  text-center mt-16 uppercase'>commandez en ligne</a>

                </div>
            </div>

    </div>
  )
}

export default GlovoCLa
