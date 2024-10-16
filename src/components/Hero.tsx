import React from 'react'

const Hero:React.FC = () => {
  return (
    <div className='flex flex-col item-center justify-center relative '>
        <div>
            <div className='w-[450px] md:w-[550px] md:h-[550px] h-[450px] border rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-white/40 opacity-20 absolute  '></div>
            <div className='w-[350px] md:w-[750px] md:h-[750px] h-[350px] border rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-white/40 opacity-20 absolute  '></div>
            <div className='w-[550px] md:w-[950px] md:h-[950px] h-[550px] border rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-white/40 opacity-20 absolute  '></div>
        </div>
        <div className='text-center mt-20 py-10'>
            <h1 className='text-4xl md:text-6xl lg:text-8xl font-bold text-white'>Accédez à des Catalogues {" "} <br />
            <span className='text-gradient'>de Films Toujours à Jour</span></h1>
            <p className='text-white text-md md:text-lg lg:text-2xl text- py-2'>Rêvez Grand avec des Films à Seulement 400 Ar – <br /> Commencez Votre Commande</p>
            <div className='py-2'>
                <button className='text-black bg-white md:px-10 lg:px-20 px-5 py-2 rounded-lg text-lg capitalize'>inscrire
            </button>  
            </div>
        </div>
    </div>
  )
}

export default Hero