import React, { useState } from "react";
import ButtonColor from "./ButtonColor";

const ButtonColorBox = ({ colors }) => {
  const [active, setActive] = useState(colors[0].id);
  const handleSetActive = (id) => {
    setActive(id);
  };
  return (
    <div className="flex">
      {colors.map((color) => (
        <ButtonColor
          key={color}
          onSetActive={handleSetActive}
          isActive={active}
          colorx={color}
        />
      ))}
    </div>
  );
};

export default ButtonColorBox;
