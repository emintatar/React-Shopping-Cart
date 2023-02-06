import React from "react";
import "./Cardtitle.css";

const Cardtitle = ({ title }) => {
  return (
    <div className="card-title">
      <h1>{title}</h1>
    </div>
  );
};

export default Cardtitle;
