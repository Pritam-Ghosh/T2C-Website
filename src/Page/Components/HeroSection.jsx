import React from 'react'

import Background from '../../assets/t2c/t2c/Background.jpg'
import animation from '../../assets/t2c-assest/animation.png'
import tsbridgelogo from '../../assets/t2c-assest/ts-bridge-logo.png'
import optimile from '../../assets/t2c-assest/optimile.png'
import logodark from '../../assets/t2c-assest/logo-dark.png'
import MaskGroup from '../../assets/t2c-assest/MaskGroup.png'
import kenOne from '../../assets/t2c-assest/ken1.png'
import kentwo from '../../assets/t2c-assest/ken2.png'
function HeroSection() {
  return (
   <>
     {/* hero section */}
         <div className='heroSection'>
           <img src={Background} alt="" id='heroBackground' />
           <div className='heroBody'>
             <div className='heroMain'>
               <div className='heroMainText'>
                 <p className='heroMainText-p1'>The Future of Tech</p>
                 <p className='heroMainText-p2'>Starts Here</p>
               </div>
               <p className='heroSubText'>From concept to market, T²C supercharges your tech journey with top-tier talent, cutting-edge tools, and rapid execution. Let's build groundbreaking solutions that define tomorrow</p>
               <button className='heroButton'>Let’s Build Everything Extraordinary</button>
               <div className='heroBottom'>
                 <p className='heroBottomText'>Trusted by the best</p>
                 <div className='heroLogo'>
                   <img src={tsbridgelogo} alt="tsbridgelogo" id='tsbridgelogo' />
                   <img src={MaskGroup} alt="MaskGroup" id='MaskGroup' />
                   <img src={logodark} alt="logodark" id='logodark' />
                   <img src={optimile} alt="optimile" id='optimile' />
                 </div>
               </div>
             </div>
   
             <div className='heroBodyImgDiv'>
               <img src={animation} alt="" className='heroBodyImg' />
             </div>
           </div>
         </div>
   </>
  )
}

export default HeroSection