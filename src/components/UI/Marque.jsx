import React from 'react'
import '../../styles/Marque.css'
import Marquee from "react-fast-marquee";
import paytm from '../../assets/image/Paytm.png'
import microsoft from '../../assets/image/Microsoft.png'
import amazon from '../../assets/image/Amazon.png'
import google from '../../assets/image/Google.png'
import netflix from '../../assets/image/Netflix.png'
import lottiefiles from '../../assets/image/Lottiefiles.png'
import flipkart from '../../assets/image/Flipkart.jpg'
import ibm from '../../assets/image/IBM.png'
// import marquee from "react-fast-marquee";



const Marque = () => {
    return (
        <section>
            <div className="container">

                <div className="marquee_text">INTERNSHIP</div>
            

                <div className="company_name">
                    <Marquee play>
                    <div className='paytm'>
                        <img src={paytm} alt="" width={"200px"} height={"80px"}/>
                    </div>

                    <div className='ibm'>
                        <img src={ibm} alt="" width={"200px"} height={"80px"}/>
                    </div>

                    <div className='Lottiefiles'>
                        <img src={lottiefiles} alt="" width={"300px"} height={"150px"} />
                    </div>

                    <div className='amazon'>
                        <img src={amazon} alt=""  width={"300px"} height={"80px"} />
                    </div>
                     
                    <div className='netflix'>
                        <img src={netflix} alt="" width={"300px"} height={"90px"} />
                    </div>

                    <div className='microsoft'> 
                        <img src={microsoft} alt=""  width={"300px"} height={"150px"} />
                    </div>

                    <div className='flipkart'>
                        <img src={flipkart} alt=""  width={"350px"} height={"100px"} />
                    </div>

                    <div className='google'>
                        <img src={google} alt=""  width={"300px"} height={"100px"} />
                    </div>
                    </Marquee>
                    </div>
                    
                    </div>
        </section>

    )
}

export default Marque