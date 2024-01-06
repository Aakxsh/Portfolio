import React from 'react'
import youtube from '../../assets/image/youtube.png'
import instagram from '../../assets/image/instagram.png'
import logo1 from '../../assets/image/2nd.jpg'
import mini_logo from '../../assets/image/mini_logo.gif';


const Hero = () => {
  return <section>
    <div className="container">
      <div className="animated_logo">
        <img src={logo1} alt="" width={"150px"} height={"100px"}/>
      </div>

      <div className="mini_logo">
        <img src={mini_logo} alt="" width={"200px"} height={"200px"} />
      </div>


      <div className="hero_wrapper">

        {/* main topic */}
        <div className="hero_content">Programmers seem to be changing the <span className = "worldText">World{"</>"}</span>

          <div className="subtitle">I’m not a great programmer, I’m just a good programmer with great habits.
          </div>
          

        </div>

        {/* hero img */}
        <div className="explore">
          <div className="explore_bttn">
            <button className="explore_btn">Explore Courses</button>


            {/* social button */}

            <div className="social_button">
              {/* youtube button */}
            <div className="youtube_btn">
              <img src={youtube} alt="" width={"35px"} height={"35px"} />
              <div className="youtube_text">514k+</div>
              
            </div>

            {/* instagram button */}
            <div className="instagram_btn">
              <img src={instagram} alt="" width={"30px"} height={"30px"} />
              <div className="insta_text">74k+</div>
            </div>

            </div>

            

          </div>




        </div>
      </div>
    </div>
  </section>
}

export default Hero