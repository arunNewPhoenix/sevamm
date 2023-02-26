import React from 'react'
import './review.css'
import reviewPic from '../../assets/reviewPic.svg'
import thoughtPic from '../../assets/thoughtPic.svg'
const Review = () => {
  return (
    <div className='review-section'>
    <div className='circle-img'>
    <img src={thoughtPic} className="img-pic"/>
</div>
<div className='art-image1'></div>
<div className='art-image2'></div>
<div className='art-image3'></div>
<div className='review-box'>

<div className='section-1'>

</div>
<div className='section-1'>
  <div className='review-1'>
  <div className='circle-img-profile'>
  <img src={reviewPic} className="img-pic"/>
  <div className='review-line'></div>
</div>
  </div>
</div>
<div className='section-1'>
<div className='review-1'>
  <div className='circle-img-profile'>
  <img src={reviewPic} className="img-pic"/>
  <div className='review-line'></div>

  </div>
  </div>

</div>
<div className='section-1'>
<div className='review-1'>

<div className='circle-img-profile'>

<img src={reviewPic} className="img-pic"/>

<div className='review-line'></div>

</div>
  </div>
</div>

</div>
<div className='subscribe-bar'>
<form>
<label>

<input type="text" name="name"  className='input-bar'/>
<button className='round-button' ><span> subscribe</span></button>

</label>
</form>

</div>

</div>
  )
}

export default Review