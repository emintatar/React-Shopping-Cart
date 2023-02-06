import React from "react";
import "./Cardimage.css";

const Cardimage = ({ image }) => {
  return (
    <div className="card-image">
      <img src={image} alt="" />
    </div>
  );
};

export default Cardimage;
