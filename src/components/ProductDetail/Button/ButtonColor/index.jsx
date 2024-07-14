import React from "react";
import ButtonColor from "./ButtonColor";

const ButtonColorBox = ({ colors }) => {
  console.log(colors);
  return (
    <div className="flex">
      <ButtonColor />
      <ButtonColor />
      <ButtonColor />
      <ButtonColor />
      <ButtonColor />
      <ButtonColor />
      <ButtonColor />
    </div>
  );
};

export default ButtonColorBox;
