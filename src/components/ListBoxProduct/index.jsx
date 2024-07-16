import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import ItemProduct from "../ItemProduct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ListBoxProduct = ({ title, listProduct }) => {
  return (
    <div className="mt-4">
      <div
        style={{ fontSize: "3rem" }}
        className="title pt-7 font-bold text-center"
      >
        iPhone
      </div>
      <div className="grid grid-cols-4 gap-7 mt-5">
        <ItemProduct />
        <ItemProduct />
        <ItemProduct />
        <ItemProduct />
      </div>
      <div className="more mt-10 justify-center flex">
        <button
          type="button"
          className="border-primary1 rounded-2xl text-1.5xl border-1 flex items-center px-16 py-4 text-primary1 hover:bg-primary1 hover:text-white"
        >
          <span className="me-2">Xem tất cả iPhone</span>
          <FontAwesomeIcon style={{ fontSize: "1.6rem" }} icon={faAngleRight} />
        </button>
      </div>
    </div>
  );
};

export default ListBoxProduct;
