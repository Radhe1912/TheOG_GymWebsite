import React from "react";
import "./Loader.css";

const Loader = (props) => {
  return (
    <>
      {props.load
        ? <div className="d-flex vh-100 vw-100 position-fixed top-0 left-0 align-items-center justify-content-center" style={{background: "#ffffff40", zIndex:100}}>
            <div className="loader">
              <div className="face">
                <div className="circle"></div>
              </div>
              <div className="face">
                <div className="circle"></div>
              </div>
            </div>
          </div>
        : null
      }
    </>
  );
}

export default Loader