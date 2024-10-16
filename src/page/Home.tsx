import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Banner from '../assets/image/banner.png';
import Offre from '../components/offre';
import { ContainerScroll } from '../components/container-scroll-animation'; // Updated import

const Home: React.FC = () => {
  return (
    <div className='w-full h-full bg-[#040207] overflow-hidden'>
      <div className='max-w-7xl mx-auto'>
        <div className='px-4 py-6'>
          <Navbar />
        </div>
        <div className='py-20'>
          <Hero />
          <Offre/>
        </div>
      </div>
    </div>
  );
}

export default Home;
