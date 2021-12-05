import React from "react";
import "./Card.css";

export const Card = ({ title, price, redactedPrice, para, popular, features = [] }) => {
  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-muted text-uppercase text-left">
            {title}
            <span className="banner">{popular}</span>
          </h5>
          <h6 className="card-price text-left">
            ${price}
            <span className="period">.99/month</span>
            <p className="period2">${redactedPrice}</p>
          </h6>
          <h2 className="paragraph">{para}</h2>
          <hr />
          <div className="card-content">
            {features.map((feature, index) => (
              <li className="list-unstyled">
                <span className="fa-li">
                  <i className="fas fa-check-circle"></i>
                </span>
                {feature}
              </li>
            ))}
          </div>
          <div className="space"></div>
          <button className="btn btn-block text-uppercase mt-auto">
            Create Server
          </button>
        </div>
      </div>
    </div>
  );
};
