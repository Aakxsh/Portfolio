import React from 'react'
import '../../styles/Welcome.css'
import Welcomes from '../../assets/image/Welcome.jpg'


const Welcome = () => {
  return (
    <section>
      <div className="container">


        <div className="Welcome_animated">
          <img src={Welcomes} alt="" width={"750px"} height={"500px"} />

        </div>

        <div className="Welcome_page" id='welcome'>Welcome To <span className='Welcome_text'>Code Learner
          {" </>"}</span>
        </div>

        <div className="Welcome_subtitle" id='welcome_sub'>
          I am B.Tech student of Ajay Kumar Garg Engineering College 
        </div>


        <div className="slide">
          <div className="slide_box">
            <h1>Hello Coders !</h1>
            <p>I am delighted to welcome you to the world of coding and programming. You are embarking on a journey of discovery and innovation that can take you to great heights in your personal and professional life. Whether you are just starting out or have years of experience under your belt, I am here to help you in any way I can. Don't hesitate to ask me any questions or seek my guidance as you continue to learn and grow in this exciting field. Best of luck in your programming endeavors!</p>
          </div>
        </div>


      </div>




    </section>
  )
}

export default Welcome