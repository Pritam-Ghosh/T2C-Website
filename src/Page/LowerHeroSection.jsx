import React from 'react'
import GradientBlur from '../assets/t2c-assest/Gradient+Blur.png'
import kenOne from '../assets/t2c-assest/ken1.png'
import kentwo from '../assets/t2c-assest/ken2.png'
function LowerHeroSection() {
  return (
<>
   <div className='lowerHeroSection'>
        <div className='lowerHeroSectionIntro'>
          <p className='lowerHeroIntroText'>Innovation in Action</p>
          <p className='lowerHeroIntroSmallText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nulla velit, maximus sit amet suscipit in, fermentum id est. Suspendisse consequat ornare elit</p>
          <img src={GradientBlur} alt="GradientBlur" id='lowerHeroBackground' />
        </div>
        <div className='lowerHeroCard'>
          <div className='lowerHeroCard1'>
            <img src={kenOne} alt="kenOne" className='Card1Img' />
            <p className='lowerCardHeading'>Revolutionized Kenverse’s AI capabilities in just 6 months</p>
            <p className='lowerTextCard'>From concept to deployment, T²C engineered an AI transformation that positioned Kenverse as a market leader.</p>
          </div>
          <div className='lowerHeroCard1'>
            <img src={kentwo} alt="kentwo" className='Card1Img' />
            <p className='lowerCardHeading'>Transformed Optimile into a seamless logistics powerhouse</p>
            <p className='lowerTextCard'>Reimagined and redefined by T²C, Optimile now sets the standard for seamless logistics.</p>
          </div>
        </div>
      </div>
</>
  )
}

export default LowerHeroSection