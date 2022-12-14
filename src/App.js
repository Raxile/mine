import React from 'react';
import Footer from './shared/Navigation/Footer';
import MainNavigation from './shared/Navigation/MainNavigation' 
import SimpleSlider from './ui/components/Slick';
import GetInTouch from './ui/pages/GetInTouch';
import Services from './ui/pages/Services';
import TechUsed from './ui/pages/TechUsed';
import WorkProg from './ui/pages/WorkProg';

const App = () => {

  return (
    <div className='bg-slate-100 h-fit'>
       <MainNavigation />
       <SimpleSlider />
       <Services />
       <WorkProg />
        <TechUsed />    
        <GetInTouch /> 
       <Footer/>
      
    </div>
  )
}

export default App
