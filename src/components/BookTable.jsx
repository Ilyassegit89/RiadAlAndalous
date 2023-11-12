import bg from '../assets/bgParalax.jpg';

const BookTable = () => {
    const divStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%',
  };

  return (
    <div className='w-full max-h-[454px] bg-fixed py-[100px] px-4' style={divStyle} >
        <div className='text-white max-w-[1000px] mx-auto bg-black/50 min-h-[300px] flex flex-col items-center p-4'>
          <h1 className='text-3xl font-normal tracking-wide'>RÉSERVEZ VOTRE TABLE</h1>
          <p className=' text-center py-4 font-serif'>Réservez dès maintenant votre table dans notre
restaurant authentique et laissez-vous séduire par une expérience gastronomique inoubliable.</p>
          <a href='/' className='min-w-[100px]  font-bold cursor-pointer border-[5px] border-white p-4 hover:bg-[#f26d35] hover:text-white  hover:border-[#f26d35]  text-center mt-7'>RÉSERVER</a>

        </div>

    </div>
  )
}

export default BookTable
