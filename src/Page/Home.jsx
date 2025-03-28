import React from 'react'

//component
// import Navbar from './Components/Navbar'

//image nav
import logo from '../assets/t2c-assest/logo.png'
{/* hero section */ }
import Background from '../assets/t2c/t2c/Background.jpg'
import animation from '../assets/t2c-assest/animation.png'
import tsbridgelogo from '../assets/t2c-assest/ts-bridge-logo.png'
import optimile from '../assets/t2c-assest/optimile.png'
import logodark from '../assets/t2c-assest/logo-dark.png'
import MaskGroup from '../assets/t2c-assest/MaskGroup.png'


/* Lower hero section */


/* body Technology, Turbocharged*/
import ClosedOne from '../assets/t2c/t2c/Closed1.png'
import ClosedTwo from '../assets/t2c/t2c/Closed2.png'
import ClosedThree from '../assets/t2c/t2c/ClosedThree.png'
import ClosedFour from '../assets/t2c/t2c/ClosedFour.png'

{/* About TSquaredC */ }
import spaceOne from '../assets/t2c-assest/space1.png'


{/* why choose TSquaredC */ }

import wcOne from '../assets/t2c/t2c/whyChoose/wc1.png'
import wcTwo from '../assets/t2c/t2c/whyChoose/wc2.png'
import wcThree from '../assets/t2c/t2c/whyChoose/wc3.png'
import wcFour from '../assets/t2c/t2c/whyChoose/wc4.png'

/* why choose TSquaredC */

import wcbOne from '../assets/t2c/t2c/whyChoose/wc-b1.png'
import wcbTwo from '../assets/t2c/t2c/whyChoose/wc-b2.png'
import wcbThree from '../assets/t2c/t2c/whyChoose/wc-b3.png'
import wcbFour from '../assets/t2c/t2c/whyChoose/wc-b4.png'



{/* Emerging Businesses */ }
import FrameOne from '../assets/t2c/t2c/Frame1.png'
import FrameTwo from '../assets/t2c/t2c/Frame2.png'



// Footer

import Symbol from '../assets/t2c-assest/SVG/Symbol.png'

import SymbolTwo from '../assets/t2c-assest/SVG/Symbol2.png'
import SymbolThree from '../assets/t2c-assest/SVG/Symbol3.png'
import { Menu } from 'lucide-react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import LowerHeroSection from './LowerHeroSection'

function Home() {
  return (
    <>

    <Navbar></Navbar>
<HeroSection></HeroSection>
<LowerHeroSection></LowerHeroSection>
    

      {/* Lower hero section */}
   


      {/* body Technology, Turbocharged*/}
      <div className='bodyTurbocharged'>
        <div className='TurbochargedHeading'>
          <p className='lowerHeroIntroText'>Technology, Turbocharged</p>
          <p className='lowerHeroIntroSmallText'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nulla velit, maximus sit amet suscipit in, fermentum id est. Suspendisse consequat ornare elit.”</p>
        </div>
        <div className='TurbochargedCard'>
          <div className='TurbochargedAllCard'>
            <img src={ClosedOne} alt="" className='ClosedImg' />
            <p className='turboHeading'>TurboSend</p>
            <p className='turboCardPara'>Instantly deploy powerful chat functionalities built for scalability and real-time performance. No delays, just results.</p>
            <button className='turboCardBtn'>Check Now</button>
          </div>
          <div className='TurbochargedAllCard'>
            <img src={ClosedThree} alt="" className='ClosedImg' />
            <p className='turboHeading'>TurboAuth</p>
            <p className='turboCardPara'>From Google to OAuth, we integrate every major SSO option, ensuring secure, seamless access for all users.</p>
            <button className='turboCardBtn'>Check Now</button>
          </div>
          <div className='TurbochargedAllCard'>
            <img src={ClosedTwo} alt="" className='ClosedImg' />
            <p className='turboHeading'>TurboStream</p>
            <p className='turboCardPara'>Deliver video content without lag or interruptions. TurboStream powers your platform with flawless video performance.</p>
            <button className='turboCardBtn'>Check Now</button>
          </div>
          <div className='TurbochargedAllCard'>
            <img src={ClosedFour} alt="" className='ClosedImg' />
            <p className='turboHeading'>TurboCloud</p>
            <p className='turboCardPara'>Monitor, optimize, and scale your cloud infrastructure effortlessly—TurboCloud ensures your system runs at peak efficiency</p>
            <button className='turboCardBtn'>Check Now</button>
          </div>
        </div>
      </div>

      {/* About TSquaredC */}
      <div className='AboutTSContainer'>
        <div className='AboutTSHeader'>
          <h1 className='lowerHeroIntroText '>About TSquaredC</h1>
          <p className='lowerHeroIntroSmallText aboutSubText'>At T2C, we push the boundaries of technology for businesses worldwide by creating solutions that are both innovative and robust. Our focus is on seamless integration and strategic innovation, ensuring efficient operations and scalable growth.
          </p>
          <p className='lowerHeroIntroSmallText aboutSubText'>We are committed to empowering businesses in a digital-first world, simplifying complex systems to address challenges and unlock opportunities. Our scalable solutions are designed for high performance, prioritizing customer success and sustainable growth.</p>
        </div>
        <img src={spaceOne} alt="" className='AboutTSImg' />
      </div>

      {/* why choose TSquaredC */}
      <div className='whyTS'>
        <div className='whyTSHeader'>
          <h1 className='lowerHeroIntroText'>Why Choose TSquaredC </h1>
          <p className='lowerHeroIntroSmallText'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nulla velit, maximus sit amet suscipit in, fermentum id est. Suspendisse consequat ornare elit.”
          </p>
        </div>

        {/* **** */}
        <div className='whyTSCardMain'>
          <div className='whyTSCardContainer'>
            <div className='whyTSCard' style={{ backgroundImage: `url(${wcbOne})` }}>
              <div>

                <p>Tech & Talent Unified</p>
              </div>
              <p>Access every technology, every skill set, and every tool - fully integrated and ready to execute.</p>
              <img src={wcOne} alt="" className='wcImage' />
            </div>
          </div>
          <div className='whyTSCardContainer'>
            <div className='whyTSCard' style={{ backgroundImage: `url(${wcbTwo})` }}>
              <div>

                <p>Scale Right, Scale Fast</p>
              </div>
              <p>Access every technology, every skill set, and every tool - fully integrated and ready to execute.</p>
              <img src={wcTwo} alt="" />
            </div>
          </div>
          <div className='whyTSCardContainer'>
            <div className='whyTSCard' style={{ backgroundImage: `url(${wcbThree})` }}>
              <div>

                <p>AI-Powered Innovation</p>
              </div>
              <p>Access every technology, every skill set, and every tool - fully integrated and ready to execute.</p>
              <img src={wcThree} alt="" />
            </div>
          </div>
          <div className='whyTSCardContainer'>
            <div className='whyTSCard' style={{ backgroundImage: `url(${wcbFour})` }}>
              <div>

                <p>Supercharge Your Product</p>
              </div>
              <p>Access every technology, every skill set, and every tool - fully integrated and ready to execute.</p>
              <img src={wcFour} alt="" />
            </div>
          </div>
          {/* ******* */}
        </div>
      </div>

      {/* Emerging Businesses */}


      <div className='EmergingContainer'>
        <div className='EmergingHeading'>
          <h1 className='lowerHeroIntroText EmergingIntro'>Choose Your Solution For Emerging Businesses</h1>
          <p className='EmergingIntroSmallText'>Propel your new age business forward with our Solutions:</p>
        </div>
        <div className='CardContainer'>
          <div className='Card'>
            <img src={FrameOne} alt="" className='EmergingImg' />
            <div className='EmergingParaLower'>
              <div>
                <p className='EmergingHeading EmergingHeadingOne'>Plug and Play solutions</p>
                <p className=' EmergingSubHeading'>Instant Integration, Immediate Impact:</p>
                <p className='EmergingPara'>Dive into the market without delay, utilizing our fully integrated tech stack that meshes seamlessly with your operations.</p>
              </div>

              <button className='EmergingParaBtn'>Customize Your Path</button>
            </div>

          </div>
          <div className=' CardTwo'>
            <img src={FrameTwo} alt="" className='EmergingImg' />
            <p className='EmergingHeading EmergingHeadingOne'>Customizable Solutions</p>
            <p className='EmergingSubHeading'>Customizable Solutions designed for your business's unique demands & growth trajectory.</p>
            <p className=' EmergingParaTwo'>Build, Expand: Engineered for long-term evolution, these solutions ensure your technology infrastructure grows as dynamically as your business.</p>
            <button className='EmergingParaBtn'>Accelerate with Plug & Play</button>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div class="testimonials">
        <h1 class="lowerHeroIntroText">Testimonials</h1>
        <div className='testimonialsCard'>



          <div class="testimonial">
            <div class="testimonial-content">
              <p>“T²C turned our ambitious idea into a market-ready product in record time. Their end-to-end expertise and accelerators like TurboCloud streamlined our development process, saving us months of work. From ideation to execution, they were the perfect tech partner.”</p>
            </div>
            <div class="testimonial-author">
              <img src={wcbOne} alt="Ganesh Iyer" />
              <div className='testimonial-author-name'>
                <p>Ganesh Iyer</p>
                <p>Eyemyeye</p>
              </div>

            </div>
          </div>

          <div class="testimonial">
            <div>
              <p>“We were struggling with onboarding inefficiencies until T²C stepped in. Their AI-driven solutions and seamless integration of TurboAuth transformed our workflows, cutting onboarding time by 50%. It’s like having a powerhouse tech team on demand.”</p>
            </div>
            <div class="testimonial-author">
              <img src={wcThree} alt="Raktim Bharatee" />
              <div className='testimonial-author-name'>
                <p>Raktim Bharatee</p>
                <p>PiChain</p>
              </div>
            </div>
          </div>

          <div class="testimonial">
            <div>
              <p>“Partnering with T²C was a game-changer. Their accelerators, like TurboStream, optimized our video streaming capabilities, helping us deliver a flawless user experience. They didn’t just meet our expectations - they redefined what’s possible in tech collaboration.”</p>
            </div>
            <div class="testimonial-author">
              <img src={wcFour} alt="Jaykanth Raj" />
              <div className='testimonial-author-name'>
                <p>Jaykanth Raj</p>
                <p>Stealth Mode Startup</p>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Footer */}
      <div className="container">
        <div className='footer-flex'>


          <div className="form-section">
            <div className='footerHeading'>
              <h1 className='footerHeader'>Ready to Build the Future? Let’s Make It Happen</h1>
              <p className='footerHeaderText'>Your breakthrough idea deserves a world-class execution. Partner with T²C and turn your vision into reality.</p>
            </div>

            <form>
              <div>
                <label>First Name</label>
                <input type="text" placeholder="First Name" className="input-field" />
                <label>Last Name</label>
                <input type="text" placeholder="Last Name" className="input-field" />
              </div>
              <div>
                <label>Email ID</label>
                <input type="email" placeholder="Email ID" className="input-field" />
                <label>Phone Number</label>
                <input type="tel" placeholder="Phone Number" className="input-field" />
              </div>


            </form>
            <button type="submit" className="send-button">Send Now</button>
          </div>

          <div className="contact-info">

            <div className="contactCard">
              <div className='footerIcon'>
                <img src={SymbolThree} alt="" className='FooterIconImg'/>
                <div>
                <h4>Location</h4>
                <p>
                Turbostart Technology Development Centre Pvt Ltd
                <br />
                CIN: U72900TN2022PTC0207946
                <br />
                Address: 1st Floor, Mayflower Valencia,
                <br />
                Avinashi Road, Coimbatore – 641004, TN, IN
              </p>
                </div>
               
              </div>

       
            </div>
            <div className="contactCard">
              <div className='footerIcon'>
                <img src={SymbolTwo} alt="" className='FooterIconImg3'/>
                <div>
                <h4>Contact Number</h4>
                <p>+91 7598 443 162</p>
                </div>
                
              </div>

             
            </div>
            <div className="contactCard">
              <div className='footerIcon'>
                <img src={Symbol} alt="" className='FooterIconImg2'/>
                <div>
                <h4>Email Address</h4>
                <p>t2c@tsquaredc.com</p>
                </div>
          
              </div>

         
            </div>
          </div>

        </div>
        <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-logo">
            <img src={logo} alt="" />
          </div>
          <p className="footer-tagline">
            Want to build the future with us? <br />
            Follow T²C and make an impact!
          </p>
          <div className="footer-icons">
            <a href="#" className="icon-link">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="icon-link">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="icon-link">
              <i className="fab fa-discord"></i>
            </a>
            <a href="#" className="icon-link">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
   
        </div>
        <div className="footer-middle">
          <h4>Product</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Faq</a></li>
            <li><a href="#">Why Choose</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-right">
          <h4>Company</h4>
          <ul>
            <li><a href="#">Vision</a></li>
            <li><a href="#">Mission</a></li>
            <li><a href="#">Values</a></li>
            <li><a href="#">Team</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
      <p className="copyright">© 2025 Pritam Ghosh | All Rights Reserved.</p>
        <a href="#">Privacy Policy</a>  <a href="#">Terms of Service</a>
      </div>
    </footer>
      </div>
    </>
  )
}

export default Home