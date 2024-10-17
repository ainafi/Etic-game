import React from 'react';
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import Manette from '@/assets/image/manette.png'
import Movie from '@/assets/image/movie.png'
const Footer: React.FC = () => {
  return (
    <footer>
      <div className='relative mb-16'>
        <img src={Manette} className='w-[300px] absolute hidden lg:block -inset-2' alt="" />
        <img src={Movie} className='w-[250px] absolute md:-right-10 top-0 hidden lg:block rotate-45 ' alt="" />
        <div>
          <h2 className='py-5 text-3xl font-bold text-center text-white'>Créer votre compte</h2>
          <p className='text-center text-white'>Pour accéder au catalogue de films et séries et faire votre commande</p>
          <div className="flex justify-center m-5 text-center">
            <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="flex items-center space-x-2 text-white hover:ease-out hover:duration-75 hover hover:bg-red-500 hover:text-white hover:border-none"
            >
                <span>creer un compte</span>
            </HoverBorderGradient>
          </div>
        </div>
      </div>
        <p className='text-sm text-center text-white/25'>© Etic-game 2024. Tous droits réservés. | Mentions légales | CGU | CGV</p>
    </footer>
  );
};

export default Footer;
