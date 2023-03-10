import React, { useState } from 'react'
import Typewriter from "typewriter-effect"
import "../CSS/About.css"
import { Icons } from "../Data/Icons"
import Random from "../img/random.jpg"


function AboutMe() {

  const [show, setShow] = useState("")

  function showAbout () {
    setShow("show")
  }

  return (
    <div className='about_container'>
      <div className='my-info-container'>
        <div className='my-picture'>
          <img src={Random} alt="" />
        </div>
        <div className='my-info'>
          <h3 className="title">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                .typeString("Francisco Marin")
                .pause()
                .callFunction(showAbout)
                .start()
              }}>
            </Typewriter>
          </h3>
          <p className={`about_txt ${show}`}>Es.... Dinamicooooo y el más hermoso del universo</p>
          <p className={`about_txt ${show}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, autem.</p>
          <p className={`about_txt ${show}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, autem.</p>
          <p className={`about_txt ${show}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, autem.</p>
        </div>
      </div>
      <div className='icons-container'>
        {Icons.map((icon) => (
          <img key={icon} src={icon} alt="" />
        ))}
      </div>
    </div>
  )
}

export default AboutMe