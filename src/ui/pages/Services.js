import React from 'react'
import Card from '../../shared/UIElements/Card'
import './Services.css'

const Services = () => {
    const servicesCred = [
       {
        id:1,
        name:"WEB DEVELOPMENT",
        img:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
        para:"We Create Powerful, Beautiful, High-Performance web development which performs in a fast manner in any platform and get best Web Development Services with security where client easily keeps their business and get instant online growth with unlimited traffic."
       },
       {
        id:2,
        name:"MOBILE APP DEVELOPMENT",
        img:"https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        para:"Our talented and experienced experts are aware of modern-day technology and provide Android and IOS mobile application services as per the requirements of the client for any industry."
       },
       {
        id:3,
        name:"IT CONSULTING SERVICES",
        img:"https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        para:"We can solve any critical and complicated issues with strong communication skills. Our IT consulting services has set a new edge of the growth as well as offers offshore and onshore contract-based staffing services largely."
       },
       {
        id:4,
        name:"INFRASTRUCTURE SERVICES",
        img:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        para:"We build a reliable, flexible, and affordable subscription-based infrastructure services & solution that supports your strategic transformation and provides complete control of your data & We are available for remote monitoring & management with 24X7."
       },
       {
        id:5,
        name:"ENTREPRISE SOLUTIONS",
        img:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=815&q=80",
        para:"In a rapid fast-paced world economy, your business required the robust backing of technological enhancement to remain competitive. Our best enterprise solutions can help you to decrease operational costs, expand your business."
       },
       {
        id:6,
        name:"CLOUD SOLUTIONS",       
        img:"https://plus.unsplash.com/premium_photo-1661627555496-1646ae639320?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
        para:"Data of your organization is surrounding all over the globe but secure and centralized data gives your organization more effective and efficient. Our dedicated team is specialized to maintain the integrity of any cloud solutions as well as your data, cloud migrations or etc."
       }
    ];
  return (
    <div>
      <h3 className='mt-4 text-xl font-serif font-semibold text-teal-900 text-center'>Services Delivered by Us</h3>
      <h1 className='text-2xl mt-2 font-serif font-semibold text-center px-3 media__px64'>WE HAVE A QUALIFIED TEAM OF DIGITAL AGENCY THAT SUPPORT TO RID YOUR GLICHES.</h1>
      <p className='font serif text-center px-3 mt-2 media__px64'>We works With A young & experienced Team with great Ideas & a new vision where they provide 100% honesty and attention towards our valuable clients. We believe in making genuine commitments & work on the deadlines. We know the value of money and trust which you share with us. We always does its best to safeguard that trust by going beyond the client’s expectation. We have plenty of services such as Digital Marketing Services, Web & Mobile development services, and many more where we make a plan in sequence to increase your website’s rate of conversation. We have the ultimate guide of the latest approach of digital marketing techniques & tactics..</p>
      <div className='my-8'>
      <div className='media__grid px-10'>
        {servicesCred.map((t)=><Card key={t.id} img={t.img} para={t.para} name={t.name}/>)}
        
      </div>
      </div>
    </div>
  )
}

export default Services
