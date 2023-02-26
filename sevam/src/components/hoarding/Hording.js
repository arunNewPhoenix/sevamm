import React from 'react'
import './hoarding.css'
import bannerPic from '../../assets/bannerImg.PNG'
import userPic from '../../assets/userPic.svg'
const Hording = () => {
  return (
    
    
<div className='container'>
<div className='box'>

    <div className='banner'>
    <img src={bannerPic} style={{height: "298px" , width: "433px"}}/>
    </div>
</div>
<div className='user-picture'>
<img src={userPic} style={{height: "512px" , width: "473px"}}/>
</div>
</div>

  )
}

export default Hording