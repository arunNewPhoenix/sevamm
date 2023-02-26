import React from "react";
import "./savings.css";
const Savings = () => {
  return (
    <div className="savings-section">
      <div className="saving-instruc">
        <div className="line"></div>
        <div className="vertical-line"></div>
        <div className="instructions">
          <p className="para-pos1">
            Credit cards may provide a temporary sense of relief, but the high
            rates of interest can deplete your savings in no time. It helps to
            limit your debt and restrict credit card purchases to ensure that
            your savings are intact and growing
          </p>
          <p className="para-pos2">
            If you find it difficult to save regularly, try to record and keep a
            track of your monthly expenditure. This will offer you a clear
            picture of where you spend. You can then identify the things that
            are not important and aim at saving more by avoiding those
            purchases.
          </p>
          <p className="para-pos3">
            To devise a budget for each month. You can create a plan at the
            beginning of the month to target savings and set limits for
            spending. This lets you focus on what is important, reduces the
            chances of over-spending, and lets you save as planned.
          </p>
        </div>
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
                    <span class="fa fa-check me-2"></span>tax benifits
                  </li>{" "}
                  <li>
                    <span class="fa fa-check me-2"></span>credit card benifits
                  </li>{" "}
                  <li>
                    <span class="fa fa-check me-2"></span>subsidies
                  </li>{" "}
                  <li>
                    <span class="fa fa-check me-2"></span>Investment
                  </li>{" "}
                  <li>
                    <span class="fa fa-check me-2"></span>Loan
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
                    <span class="fa fa-check me-2"></span>tax benifits
                  </li>{" "}
                  <li>
                    <span class="fa fa-check me-2"></span>credit card benifits
                  </li>{" "}
                  <li>
                    <span class="fa fa-check me-2"></span>subsidies
                  </li>
                  <li>
                    <span class="fa fa-check me-2"></span>Investment
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
                    <span class="fa fa-check me-2"></span>credit card benifits
                  </li>{" "}
                  <li>
                    <span class="fa fa-check me-2"></span>Investment
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
