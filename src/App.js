import React from 'react';
import MainNavigation from './shared/Navigation/MainNavigation' 
import MPage from './ui/pages/MPage';
import SimpleSlider from './ui/components/Slick';


const App = () => {
  return (
    <div>
       <MainNavigation />
       {/* <MPage/> */}
       <SimpleSlider />
    </div>
  )
}

export default App
