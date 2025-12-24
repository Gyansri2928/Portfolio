import React from "react";
import pic from "../images/hey (2).jpg";

function Photo() {
  return (
    <div className="row px-5 py-2 my-5" id="photoRow">
      <div className="col">
        <div className="row" id="imgRow1"></div>
        <div className="row" id="imgRow2"></div>
      </div>
      <div id="photoCol" className="col">
        <img src={pic} id="photo" alt="Gyan Sagar Srivastava" />
      </div>
    </div>
  );
}

export default Photo;
