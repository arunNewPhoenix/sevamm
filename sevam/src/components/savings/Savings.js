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
            <b>Credit cards</b> may provide a temporary sense of relief, but the high
            rates of interest can deplete your savings in no time. It helps to
            limit your debt and restrict credit card purchases to ensure that
            your savings are intact and growing.
          </p>
          <p className="para-pos2">
            If you find it difficult to save regularly, try to record and keep track of your<b>monthly expenditures</b> . This will offer you a clear picture of where you spend. You can then identify the things that are not important and aim to save more by avoiding those purchases.
          </p>
          <p className="para-pos3">
            Create a <b>monthly budget plan</b> to target savings and set limits for spending. This lets you focus on what is important, reduces the chances of overspending, and helps you save as planned.
          </p>
        </div>
      </div>
      <div className="saving-plans">
        <div className="plans">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="card d-flex align-items-center justify-content-center">
                <div className="ribon">
                  <span className="fas fa-spray-can"></span>
                </div>
                <p className="h-1 pt-5">STARTER</p>
                <span className="price">
                  <sup className="sup">$</sup> <span className="number">49</span>
                </span>
                <ul className="mb-5 list-unstyled text-muted">
                  <li>
                    <span className="fa fa-check me-2"></span>tax benefits
                  </li>
                  <li>
                    <span className="fa fa-check me-2"></span>credit card benefits
                  </li>
                  <li>
                    <span className="fa fa-check me-2"></span>subsidies
                  </li>
                  <li>
                    <span className="fa fa-check me-2"></span>investment
                  </li>
                  <li>
                    <span className="fa fa-check me-2"></span>loan
                  </li>
                </ul>
                <div className="btn btn-primary">Get Started</div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-md-0 mt-5">
              <div className="card d-flex align-items-center justify-content-center">
                <div className="ribon">
                  <span className="fas fa-broom"></span>
                </div>
                <p className="h-1 pt-5">STANDARD</p>
                <span className="price">
                  <sup className="sup">$</sup> <span className="number">79</span>
                </span>
                <ul className="mb-5 list-unstyled text-muted">
                  <li>
                    <span className="fa fa-check me-2"></span>tax benefits
                  </li>
                  <li>
                    <span className="fa fa-check me-2"></span>credit card benefits
                  </li>
                  <li>
                    <span className="fa fa-check me-2"></span>subsidies
                  </li>
                  <li>
                    <span className="fa fa-check me-2"></span>investment
                  </li>
                </ul>
                <div className="btn btn-primary mb-1">Get Started</div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-md-0 mt-5">
              <div className="card d-flex align-items-center justify-content-center">
                <div className="ribon">
                  <span className="fas fa-broom"></span>
                </div>
                <p className="h-1 pt-5">PREMIUM</p>
                <span className="price">
                  <sup className="sup">$</sup> <span className="number">100</span>
                </span>
                <ul className="mb-5 list-unstyled text-muted">
                  <li>
                    <span className="fa fa-check me-2"></span>tax benefits
                  </li>
                  <li>
                    <span className="fa fa-check me-2"></span>credit card benefits
                  </li>
                  <li>
                    <span className="fa fa-check me-2"></span>subsidies
                  </li>
                  <li>
                    <span className="fa fa-check me-2"></span>investment
                  </li>
                </ul>
                <div className="btn btn-primary mb-1">Get Started</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Savings;

