import React, { Component } from "react";
import Slider from "react-slick";
import BackContent from "./BackContent";

import './Slick.css'


import img1 from '../../images/CloudComp.png';
import img2 from '../../images/AppDevlop.png';
import img3 from '../../images/ITConsult.png';
import img4 from '../../images/webDesign.png';
import img5 from '../../images/webDevlop.png';



export default class SimpleSlider extends Component {

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const tech = [
      {
        id: 1,
        name: "Cloud Computing Solutions",
        description: "We are the best hosted and maintained the data of the client where any small and large organization can easily driver their data including software and avoid the value of capital expenditures & conservation headaches that they would have if they developed the service themselves on-premise & get advantages from laaS, PaaS, SaaS with leverage latest Cloud computing services & solution with our certified developers.",
        imgUrl: img1
      },
      {
        id: 2,
        name: "Mobile App Development",
        description: "We cover all the aspect and end to end development of mobile apps on Android or IOS. We are very capable to create interactive designs and Morden Mobile applications services for various industrial domains. Our experienced team makes innovative, ideate, and latest trend mobile apps where clients can easily achieve user attention and retention on these apps. We are always available for a broad range of business verticals including start-ups, agencies, product companies and so on.",
        imgUrl: img2
      },
      {
        id: 3,
        name: "IT Consulting Services",
        description: "As one of the leading information technology firm, we come up with an ultimate range of IT consulting services based on knowledgeable and qualifie IT Consulting service team and they are very capable to provide the immediate and accurate consultant with cost effective optimization of IT system & process to ensure tangible business outcomes. We offer the world best Contract based staffing, Onshore & Offshore contract, and get the ultimate range of consulting services.",
        imgUrl: img3
      },
      {
        id: 4,
        name: "Web Designing Services",
        description: "We believe on first interaction is the last impression, for this reason, we promise a customized strategy that suits your budget. Whether you are an enterprise or start-up, our Website designing services sare perfect to align with your expectations and requirement. Our team will give your website a brand-new responsive website including eye-catching, and customer friendly that will & attract and fascinate visitors.",
        imgUrl: img4
      },
      {
        id: 5,
        name: "Web Development Services",
        description: "We are one of the leading Web Development Company with an experienced and award-winning team that makes an ultimate range of unique, innovative, and effective templates of the website. Our dedicated team delivers on the customer-centric, client-focused, and effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals. Web Development Services are creating long-lasting impressing including visual and interactive.",
        imgUrl: img5
      }
    ];

    return (
      <div className="slick__background mt-[4.2rem] h-[90vh] w-[95vw] px-8 bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-400 ml-[0.6rem]" >

        <Slider {...settings}>

          {tech.map((t) => (
            <div className="slick__map h-[90vh] w-[95vw] " key={t.id}>
              <BackContent name={t.name} imgUrl={t.imgUrl} description={t.description} firstColor={t.firstColor} secandColor={t.secandColor} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}