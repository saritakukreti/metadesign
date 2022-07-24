import React from "react";

const FeedItem = (props) => {
  return (
    <div className="box-content wow fadeIn" data-wow-delay="1.50s">
      <span className="icon">
        <i className={props.icon} aria-hidden="true"></i>
      </span>
      <h6>{props.title}</h6>
      <p>{props.description}</p>
    </div>
  );
};

export default FeedItem;
