import React, { useEffect, useState } from "react";

const SideBar = () => {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState("lorem ipsum");
  function editMode() {
    setActive(true);
  }

  return (
    <>
      <div className="side-top-box">
        <div className="inner-content d-flex justify-content-between align-items-center">
          <h6>Lorem Ipsum</h6>
          <span className="">
            <i className="fa fa-pencil" aria-hidden="true"></i>
          </span>
        </div>
        <div className="line"></div>
        <div className="side-top-content">
          <div className="row">
            <div className="col-md-6 border-right">
              <h6>Lorem Ipsum</h6>
              <p>
                <i
                  className="fa fa-pencil"
                  aria-hidden="true"
                  onClick={() => editMode()}
                ></i>
                {!active ? (
                  <>lorem ipsum</>
                ) : (
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                )}
              </p>
            </div>
            <div className="col-md-6">
              <h6>Lorem Ipsum</h6>
              <p>
                <i className="fa fa-shield" aria-hidden="true"></i>
                lorem ipsum
              </p>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="side-top-content">
          <div className="row">
            <div className="col-md-6 border-right">
              <h6>Lorem Ipsum</h6>
              <p>
                <i className="fa fa-money" aria-hidden="true"></i> lorem
              </p>
            </div>
            <div className="col-md-6">
              <h6>Lorem Ipsum</h6>
              <p>
                <i className="fa fa-money" aria-hidden="true"></i>
                0.000,00.00
              </p>
            </div>
          </div>
        </div>
        <div className="line"></div>
      </div>

      <div className="side-top-box mt-3">
        <div className="inner-content d-flex justify-content-between align-items-center">
          <h6>Lorem Ipsum</h6>
          <span>
            <i className="fa fa-pencil" aria-hidden="true"></i>
          </span>
        </div>
        <div className="line"></div>
        <div className="side-bottom-content">
          <div className="accordion" id="accordionExample">
            <div className="item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  <span className="badge-yellow">8</span> Lorem Ipsum
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>lorem ipsum</p>
                </div>
              </div>
            </div>
            <div className="item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <span className="badge-red">2</span> Lorem Ipsum
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>lorem ipsum</p>
                </div>
              </div>
            </div>
            <div className="item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <span className="badge-green">0</span> Lorem Ipsum
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>lorem ipsum</p>
                </div>
              </div>
            </div>
          </div>
          <div className="line"></div>
          <div className="submit-btn">
            <a>Lorem Ipsum</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
