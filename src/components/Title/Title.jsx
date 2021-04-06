import React from "react";
import "./Title.scss";

export const Title = ({ title, titleText }) => {
  return (
    <div className="title">
      <p className="title--name">{title}</p>
      <p className="title--text">{titleText}</p>
    </div>
  );
};
