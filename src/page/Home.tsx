import React from 'react';
import Navbar from '../components/Navbar';

import Banner from '../assets/image/banner.png';
import Offre from '../components/offre';
import { ContainerScroll } from '../components/container-scroll-animation'; // Updated import
import Title from '../components/title';
import Faq from '@/components/faq';
import Footer from '@/components/Footer';

const Home: React.FC = () => {
  return (
    <div className='w-full h-full bg-[#040207] overflow-hidden'>
      <div className='mx-auto max-w-7xl'>
        <div className='px-4 py-6'>
          <Navbar />
        </div>
        <div className='px-5 py'>
          <ContainerScroll titleComponent={<Title />} children={<img className='w-full h-full rounded-lg object-fit box-shadow' src={Banner} alt="banner" />}>
          </ContainerScroll>
          <Trend/>
          <Offre/>
          <Faq/>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default Home;
