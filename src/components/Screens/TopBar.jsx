import React from "react";
import Button from "../Buttons/Button";

const TopBar = () => {
  return (
    <div className="container-fluid">
      <div className="row mt-3">
        <div className="col-md-6">
          <h5>Lorem, ipsum dolor sit amet </h5>
        </div>
        <div className="col-md-6 right-btn">
          <Button classUsed="login-btn" text="Lorem Ipsum" />{" "}
          <Button classUsed="logout-btn" text="Lorem Ipsum" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
