import React from "react";
import "./Card.css";
import Cardtitle from "../Cardtitle/Cardtitle";
import Cardimage from "../Cardimage/Cardimage";
import Cardinfo from "../Cardinfo/Cardinfo";

const Card = ({ title, image, info, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-body">
        <Cardtitle title={title} />
        <Cardimage image={image} />
        <Cardinfo info={info} />
      </div>
    </div>
  );
};

export default Card;
