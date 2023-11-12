import React from 'react'

const ContactForm = () => {
  return (
    <div className='w-full  bg-[#eee] min-h-screen'>
        <div className='w-full max-w-[950px] mx-auto p-4'>
            <h1 className='text-4xl'>Contact form</h1>
            <p className='py-5 text-lg font-serif text-gray-600'>N’hésitez pas à prendre contact avec le restaurant Riad Andalous pour réserver votre table et profiter d’une expérience gastronomique exceptionnelle. Notre équipe chaleureuse et professionnelle est là pour répondre à toutes vos questions et faire de votre visite une expérience inoubliable.</p>
            <form action='https://getform.io/f/57924472-de35-483b-9f94-b2179f3c50b8' method='POST' encType='multipart/form-data'>
                <label>Nom et Prénom</label>
                <div className='pb-5'>
                    <input type="text" name="name" className='w-full  px-4 caret-[#f26d35] h-12   '/>
                </div>
                <label>E-mail</label>
                <div className='pb-5'>
                    <input name='email' type='email' className='w-full rounded-md px-4 caret-[#f26d35] h-12 '/>
                </div >
                <label>Sujet</label>
                <div className='pb-5'>
                    <input name='sujet' type='text' className='w-full rounded-md px-4 caret-[#f26d35] h-12 '/>
                </div>

                <label>Message</label>
                <div className='pb-5'>
                <textarea name='message' className='w-full rounded-md px-4 caret-[#f26d35] ' rows="7">

                </textarea>

                </div>

                <input value='ENVOYER' type='submit' className='text-black font-bold cursor-pointer border-4 border-black p-4 hover:bg-[#f26d35] hover:text-white hover:border-4 hover:border-[#f26d35] block mx-auto'/>
            </form>
        </div>
    </div>
  )
}

export default ContactForm
