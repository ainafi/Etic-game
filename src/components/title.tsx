import React from 'react'

const Title = () => {
  return (
    <div>
        <h1 className='text-[35px] md:text-4xl lg:text-6xl font-bold text-white'>Accédez à des Catalogues {" "} <br />
            <span className='text-gradient'>de Films Toujours à Jour</span></h1>
            <p className='text-white text-md md:text-lg lg:text-2xl text- py-2'>Rêvez Grand avec des Films à Seulement 400 Ar – <br /> Commencez Votre Commande</p>
            <div className='py-2'>
                <button className='text-black bg-white md:px-10 lg:px-20 px-5 py-2 rounded-lg text-lg capitalize'>inscrire
            </button>  
        </div>
    </div>
  )
}

export default Title