import React from "react";
import "./savings.css";
const Savings = () => {
  return (
    <div className="savings-section">
   

      <div className="saving-instruc">
      <div className='line'></div>
      <div className="vertical-line"></div>
      </div>
      <div className="saving-plans">
        <div class="plans">
          {" "}
       
          <div class="row ">
            {" "}
            <div class="col-lg-4 col-md-4 ">
              {" "}
              <div class="card d-flex align-items-center justify-content-center">
                {" "}
                <div class="ribon">
                  {" "}
                  <span class="fas fa-spray-can"></span>{" "}
                </div>{" "}
                <p class="h-1 pt-5">STARTER</p>{" "}
                <span class="price">
                  {" "}
                  <sup class="sup">$</sup> <span class="number">49</span>{" "}
                </span>{" "}
                <ul class="mb-5 list-unstyled text-muted">
                  {" "}
                  <li>
                    <span class="fa fa-check me-2"></span>Bedrooms cleaning
                  </li>{" "}
                  <li>
                    <span class="fa fa-check me-2"></span>Vacuuming
                  </li>{" "}
                  <li>
                    <span class="fa fa-check me-2"></span>Bathroom cleaning
                  </li>{" "}
                  <li>
                    <span class="fa fa-check me-2"></span>Mirrow cleaning
                  </li>{" "}
                  <li>
                    <span class="fa fa-check me-2"></span>Livingroom cleaning
                  </li>{" "}
                </ul>{" "}
                <div class="btn btn-primary"> get started </div>{" "}
              </div>{" "}
            </div>{" "}
            <div class="col-lg-4 col-md-6 mt-md-0 mt-5">
              {" "}
              <div class="card d-flex align-items-center justify-content-center">
                {" "}
                <div class="ribon">
                  {" "}
                  <span class="fas fa-broom"></span>{" "}
                </div>{" "}
                <p class="h-1 pt-5">standard</p>{" "}
                <span class="price">
                  {" "}
                  <sup class="sup">$</sup> <span class="number">79</span>{" "}
                </span>{" "}
                <ul class="mb-5 list-unstyled text-muted">
                  {" "}
                  <li>
                    <span class="fa fa-check me-2"></span>Bedrooms cleaning
                  </li>{" "}
                  <li>
                    <span class="fa fa-check me-2"></span>Vacuuming
                  </li>{" "}
                  <li>
                    <span class="fa fa-check me-2"></span>Bathroom cleaning
                  </li>{" "}
                  <li>
                    <span class="fa fa-check me-2"></span>Mirrow cleaning
                  </li>{" "}
                  <li>
                    <span class="fa fa-check me-2"></span>Livingroom cleaning
                  </li>{" "}
                </ul>{" "}
                <div class="btn btn-primary mb-1"> get started </div>{" "}
              </div>{" "}
            </div>{" "}
            <div class="col-lg-4 col-md-6 mt-lg-0 mt-5">
              {" "}
              <div class="card d-flex align-items-center justify-content-center">
                {" "}
                <div class="ribon">
                  {" "}
                  <span class="fas fa-shower"></span>{" "}
                </div>{" "}
                <p class="h-1 pt-5">premium</p>{" "}
                <span class="price">
                  {" "}
                  <sup class="sup">$</sup> <span class="number">100</span>{" "}
                </span>{" "}
                <ul class="mb-5 list-unstyled text-muted">
                  {" "}
                  <li>
                    <span class="fa fa-check me-2"></span>Bedrooms cleaning
                  </li>{" "}
                  <li>
                    <span class="fa fa-check me-2"></span>Vacuuming
                  </li>{" "}
                  <li>
                    <span class="fa fa-check me-2"></span>Bathroom cleaning
                  </li>{" "}
                  <li>
                    <span class="fa fa-check me-2"></span>Mirrow cleaning
                  </li>{" "}
                  <li>
                    <span class="fa fa-check me-2"></span>Livingroom cleaning
                  </li>{" "}
                </ul>{" "}
                <div class="btn btn-primary "> get started </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Savings;
