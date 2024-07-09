import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import ItemProduct from "../ItemProduct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ListBoxProduct = ({ title, listProduct }) => {
  return (
    <div className="list-item mt-4">
      <div
        style={{ fontSize: "3rem" }}
        className="title pt-5 fw-bold text-center"
      >
        iPhone
      </div>
      <div className="row container-items mt-3">
        <ItemProduct />
        <ItemProduct />
        <ItemProduct />
        <ItemProduct />
      </div>
      <div className="more mt-5 justify-content-center d-flex">
        <button
          type="button"
          className="btn btn-more fs-5 rounded-4 d-flex align-items-center justify-content-center"
        >
          <span className="me-2">Sell All iPhone</span>
          <FontAwesomeIcon style={{ fontSize: "1.6rem" }} icon={faAngleRight} />
        </button>
      </div>
    </div>
  );
};

export default ListBoxProduct;
