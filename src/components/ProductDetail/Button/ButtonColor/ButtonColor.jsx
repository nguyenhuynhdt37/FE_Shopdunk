import React from "react";
import "./ButtonColor.scss";

const ButtonColor = ({ colorx, onSetActive, isActive }) => {
  console.log(isActive, colorx.id);
  const { id, color } = colorx;
  console.log(color);
  return (
    <div className="box-btn mr-3">
      <div
        onClick={() => onSetActive(id)}
        className={`${
          isActive === id ? "border-primary1" : "border-white"
        } w-14 h-14 rounded-full border-1  p-1`}
      >
        <div
          className={` w-full h-full rounded-full shadow-button_color ${color}`}
        ></div>
      </div>
    </div>
  );
};

export default ButtonColor;
