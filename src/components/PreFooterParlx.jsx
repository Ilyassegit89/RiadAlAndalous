import bg from '../assets/bgParalax2.jpg'
import logo from '../assets/riadandalouslogo.png'

const PreFooterParlx = () => {
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
        <div className='text-white max-w-[1000px] mx-auto bg-black/50 min-h-[300px] flex flex-col items-center p-4 rounded-md'>
          <h1 className='text-3xl font-normal italic'>Riad Andalous food</h1>

                <img src={logo} className='w-[150px] h-[120px] my-4' />

        </div>

    </div>
  )
}

export default PreFooterParlx
