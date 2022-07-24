import React from "react";

const PriceAnalytics = (props) => {
  return (
    <div className="count-box wow fadeIn" data-wow-delay="0.10s">
      <h4>
        <i className={props.icon} aria-hidden="true"></i> {props.amount}
      </h4>
      <p>{props.text} </p>
    </div>
  );
};

export default PriceAnalytics;
