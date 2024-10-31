import React from 'react'
import HeroSection from '../component/homePage/HeroSection'
import HowToStart from '../component/homePage/HowToStart'
import Categorys from '../component/homePage/Categorys'
import CarSLider from '../component/homePage/CarSLider';
import PeopleSayAbuoyUs from '../component/homePage/PeopleSayAbuoyUs';
import { BlogHome } from '../component/homePage/BlogHome';
import Partners from '../component/homePage/Partners';



const HomePage:React.FC = () => {
  
  return (
    <div className='min-h-screen'>
      <HeroSection />
      <HowToStart />
      <div className='mx-auto'>
      <Categorys />
      <CarSLider />
      <PeopleSayAbuoyUs />
      <BlogHome />
      <Partners />
      </div>
    </div>
  )
}

export default HomePage