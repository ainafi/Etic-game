import React from 'react';
import Navbar from '../components/Navbar';

import Banner from '../assets/image/banner.png';
import Offre from '../components/offre';
import { ContainerScroll } from '../components/container-scroll-animation'; // Updated import
import Title from '../components/title';

const Home: React.FC = () => {
  return (
    <div className='w-full h-full bg-[#040207] overflow-hidden'>
      <div className='max-w-7xl mx-auto'>
        <div className='px-4 py-6'>
          <Navbar />
        </div>
        <div className='py px-5'>
          <ContainerScroll titleComponent={<Title />} children={<img className='w-full h-full object-fit rounded-lg box-shadow' src={Banner} alt="banner" />}>
          </ContainerScroll>
          <Offre/>
        </div>
      </div>
    </div>
  );
}

export default Home;
