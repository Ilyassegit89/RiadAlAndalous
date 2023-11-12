import React from "react";

const BookForm = () => {
  return (
    <div className="w-full  bg-[#eee] min-h-screen">
      <div className="w-full max-w-[950px] mx-auto py-16 px-4">
        <h1 className="mb-5 text-4xl font-serif text-center relative after:content-[''] after:w-full after:h-[5px] after:bg-[#252525] after:bottom-[-20px] after:left-0 after:absolute before:content-[''] before:w-full before:h-[1px] before:bg-[#252525] before:bottom-[-12px] before:left-0 before:absolute ">
          RIAD ANDALOUS - RÉSERVEZ VOTRE TABLE DÈS MAINTENANT
        </h1>
        <form>
          <div className="py-7 grid md:grid-cols-3  gap-4">
            <div className="mb-[24px]">
              <label>Nom et Prénom</label>
              <div>
                <input type="text" className="w-full px-4 h-12" />
              </div>
            </div>
            <div className="mb-[24px]">
              <label>E-mail</label>
              <div>
                <input type="text" className="w-full px-4 h-12" />
              </div>
            </div>
            <div className="mb-[24px]">
              <label>Téléphone</label>
              <div>
                <input type="text" className="w-full px-4 h-12" />
              </div>
            </div>
            <div className="md:col-span-2 mb-[24px]">
              <label>Date</label>
              <div>
                <input type="text" className="w-full px-4 h-12" />
              </div>
            </div>
            <div className="md:col-span-1 mb-[24px]">
              <label>Nombre personne</label>
              <div>
                <input type="text" className="w-full px-4 h-12" />
              </div>
            </div>
            <div className="md:col-span-3">
              <label>Message</label>
              <div>
              <textarea name='message' className='w-full rounded-md px-4 caret-[#f26d35] ' rows="7">

                </textarea>
              </div>
            </div>
          </div>
          <input value='ENVOYER' type='submit' className='text-black font-bold cursor-pointer border-4 border-black p-4 hover:bg-[#f26d35] hover:text-white hover:border-4 hover:border-[#f26d35] block mx-auto'/>

        </form>
      </div>
    </div>
  );
};

export default BookForm;
