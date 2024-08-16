import React, { useState } from "react";
import ButtonStorage from "./ButtonStorage";

const ButtonStorageBox = ({ storages }) => {
  const [active, setActive] = useState(0);
  const handleSelect = (active) => setActive(active);
  return (
    <>
      <div className="product-price flex mt-7 mb-9 items-center">
        <div className="current-price text-4xl font-bold mr-8 text-primary1">
          13.690.000₫
        </div>
        <div className="old-price text-2.5xl text-color-old line-through">
          24.690.000₫
        </div>
      </div>
      <div className="product_storage">
        <div className="title mb-6">Storage</div>
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
      </div>
    </>
  );
};

export default ButtonStorageBox;
