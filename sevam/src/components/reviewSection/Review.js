import React from "react";
import "./review.css";
import reviewPic from "../../assets/reviewPic.svg";
import thoughtPic from "../../assets/thoughtPic.svg";
const Review = () => {
  const styles = {
    fontSize: '8px',
    color: ' #33333 ',
    margin: '0px',
    padding:'0px'
  };
  return (
    <div className="review-section">
      <div className="circle-img">
        <img src={thoughtPic} alt="img-pic" className="img-pic" />
      </div>
      <div className="art-image art-image1"></div>
      <div className="art-image art-image2"></div>
      <div className="art-image art-image3"></div>
      <div className="review-box">
        <div className="section-1"></div>
        <div className="section-1">
          <div className="review-1">
            <div className="circle-img-profile">
              <img src={reviewPic} alt="img-pic" className="img-pic" />
              <p style={styles}>
             
                had an amazing experience with ABC Company. Their customer
                service was top-notch, and they went above and beyond to ensure
                my satisfaction. The product I purchased exceeded my
                expectations, and I would highly recommend them to anyone
                looking for quality and reliable service.
              </p>
            </div>
          </div>
        </div>
        <div className="section-1">
          <div className="review-1">
            <div className="circle-img-profile">
              <img src={reviewPic} alt="img-pic" className="img-pic" />
              <p style={styles}>
             
             had an amazing experience with ABC Company. Their customer
             service was top-notch, and they went above and beyond to ensure
             my satisfaction. The product I purchased exceeded my
             expectations, and I would highly recommend them to anyone
             looking for quality and reliable service.
           </p>
            </div>
          </div>
        </div>
        <div className="section-1">
          <div className="review-1">
            <div className="circle-img-profile">
              <img src={reviewPic} alt="img-pic" className="img-pic" />
              <p style={styles}>
             
                had an amazing experience with ABC Company. Their customer
                service was top-notch, and they went above and beyond to ensure
                my satisfaction. The product I purchased exceeded my
                expectations, and I would highly recommend them to anyone
                looking for quality and reliable service.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="subscribe-bar">
        <form>
          <label>
            <input type="text" name="name" className="input-bar" />
            <button className="round-button">
              <span>Subscribe</span>
            </button>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Review;
