import React from 'react'
import Card from '../../shared/UIElements/Card2'

import './TechUsed.css'

const TechUsed = () => {
    const Tech =[
        {
            id:"1",
            img:"https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
            name:"React.js",
            para:"React is a declarative, efficient, and flexible JavaScript library for building user interfaces."
        },{
            id:"2",
            img:"https://freepngimg.com/thumb/python_logo/6-2-python-logo-free-png-image.png",
            name:"Python",
            para:"Python Is A Programming Language That Lets You Work Quickly And Integrate Systems More Effectively"
        },{
            id:"3",
            img:"https://png2.cleanpng.com/sh/d77d86fa45c6ba66cb9556bd505cf723/L0KzQYm3VME3N51uiZH0aYP2gLBuTf5wbJYyguU2anH5ccTqkvlxfF54feRBZYKwg7rrhb10a6NuiOZybnewgsbpmb02aZU5fdYDNXLnRoTtUb40PGQ5TaI9MkG4QoSCUMM5P2g8T6cDLoDxd1==/kisspng-node-js-javascript-server-side-scripting-ruby-5ad4ed85bd63f1.3434504215239038777758.png",
            name:"Node.js",
            para:"Node.js is an open source server environment. Node.js allows you to run JavaScript on the server."
        },{
            id:"4",
            name:"Laravel",
            img:"https://www.logo.wine/a/logo/Laravel/Laravel-Logo.wine.svg",
            para:"Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things."
        },{
            id:"5",
            name:"Android",
            img:"https://www.freepnglogos.com/uploads/android-logo-png/android-logo-important-announcement-for-android-users-parkeasier-16.png",
            para:"Android Is A Mobile Operating System Based On A Modified Version Of The Linux Kernel And Other Open Source Software."
        },
        {
            id:"6",
            name:"Swift",
            img:"https://1000logos.net/wp-content/uploads/2020/09/Swift-Logo-500x313.png",
            para:"Swift Is A General-Purpose, Multi-Paradigm, Compiled Programming Language Developed By Apple Inc. For IOS, MacOS, Linux Etc"
        },{
            id:"7",
            img:"https://www.freepnglogos.com/uploads/php-logo-png/php-logo-png-transparent-svg-vector-bie-supply-1.png",
            name:"Php",
            para:"PHP Is A Server Scripting Language, And A Powerful Tool For Making Dynamic And Interactive Web Pages"
        },{
            id:"8",
            name:"Java",
            img:"https://logos-download.com/wp-content/uploads/2016/10/Java_logo_icon-700x392.png",
            para:"Java Is A General-Purpose Secure Programming Language That Is Class-Based, Object-Oriente"
        }
    ];
  return (
    <div>
      <h1 className='mt-20 text-3xl font-serif font-bold text-center'>Technology in Which we Expert</h1>
      <p className='mt-4 font-serif text-center media__px64'>Are You Ready to Boost Your Brand With victorious infotech? Our Understanding not only our client rather than their business requirements. We have set a reputation delivering strategy under critical and challenging environment.</p>
      <div className='media__grid__four  my-12'>
        {Tech.map(t => <Card key={t.id} img={t.img} para={t.para} name={t.name} /> )}
      </div>
    </div>
  )
}

export default TechUsed
