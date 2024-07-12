import React, { useState } from "react";
import ButtonStorage from "./ButtonStorage";

const ButtonStorageBox = ({ storages }) => {
  const [active, setActive] = useState(0);
  console.log("active ", active);
  const handleSelect = (active) => setActive(active);
  return (
    <div className="btn-storage flex ">
      {storages.map((storage) => (
        <ButtonStorage
          isActive={active}
          key={storage.id}
          onSelect={handleSelect}
          storage={storage}
        />
      ))}
    </div>
  );
};

export default ButtonStorageBox;
