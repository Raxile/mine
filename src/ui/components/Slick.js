import React, { Component } from "react";
import Slider from "react-slick";
import BackContent from "./BackContent";


import img1 from '../../images/CloudComp.png';
import img2 from '../../images/AppDevlop.png';
import img3 from '../../images/ITConsult.png';
import img4 from '../../images/webDesign.png';
import img5 from '../../images/webDevlop.png';



export default class SimpleSlider extends Component {
    
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const tech = [
        {
            id:1,
            name:"Cloud Computing",
            description:"",
            imgUrl:img1
        },
        {
            id:2,
            name:"App Devlopment",
            description:"",
            imgUrl:img2
        },
        {
            id:3,
            name:"IT consult",
            description:"",
            imgUrl:img3
        },
        {
            id:4,
            name:"Web Design",
            description:"",
            imgUrl:img4
        },
        {
            id:5,
            name:"Web Devlopment",
            description:"",
            imgUrl:img5
        }
    ];

    return (
      <div className="mt-[2.5rem] cyan" >
 
        <Slider {...settings}>
 
        {tech.map((t) => (
         <div className="h-[30rem] ">
         <BackContent id={t.id}  name={t.name} imgUrl={t.imgUrl} firstColor={t.firstColor} secandColor={t.secandColor} />
         </div>
      ))}
        </Slider>
      </div>
    );
  }
}