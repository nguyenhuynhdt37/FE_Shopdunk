import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { IoSearch } from "react-icons/io5";
import "./Header.scss";
const Header = () => {
  return (
    <header
      style={{
        height: "6.4rem",
        backgroundColor: " #515154",
        zIndex: "2",
      }}
      className="header__box w-100 position-fixed"
    >
      <div
        style={{ width: "120rem", margin: "0 auto" }}
        className="header_container h-100 d-flex align-items-center justify-content-between"
      >
        <div className="header__logo--box h-100 d-flex align-items-center">
          <div className="boxx2">
            <img
              src="https://shopdunk.com/images/thumbs/0027333_logo-shopdunk.png"
              alt="logo"
              className="header_logo object-fit-cover"
              style={{ width: "17.5rem" }}
            />
          </div>
        </div>
        <ul className="header__router--box d-flex justify-content-around w-100 flex-fill h-100">
          <li className="header__router--item px-4 py-4 fs-4 h-100 d-block d-flex align-items-center ">
            <a href="/">iPhone</a>
          </li>
          <li className="header__router--item px-4 py-4 fs-4 h-100 d-block d-flex align-items-center ">
            <a href="/">iPad</a>
          </li>
          <li className="header__router--item px-4 py-4 fs-4 h-100 d-block d-flex align-items-center ">
            <a href="/">Mac</a>
          </li>
          <li className="header__router--item px-4 py-4 fs-4 h-100 d-block d-flex align-items-center ">
            <a href="/">Watch</a>
          </li>
          <li className="header__router--item px-4 py-4 fs-4 h-100 d-block d-flex align-items-center ">
            <a href="/">Old Product</a>
          </li>
          <li className="header__router--item px-4 py-4 fs-4 h-100 d-block d-flex align-items-center ">
            <a href="/">Accessory</a>
          </li>
          <li className="header__router--item px-4 py-4 fs-4 h-100 d-block d-flex align-items-center ">
            <a href="/">Service</a>
          </li>
          <li className="header__router--item px-4 py-4 fs-4 h-100 d-block d-flex align-items-center ">
            <a href="/">News</a>
          </li>
          <li className="header__router--item px-4 py-4 fs-4 h-100 d-block d-flex align-items-center ">
            <a href="/">Discount</a>
          </li>
        </ul>
        <div className="header_features h-100 d-flex align-items-center fs-5">
          <IoSearch className="header-icon" />
          <div className="header-cart ">
            <ShoppingBagOutlinedIcon className="header-icon" />
          </div>
          <PersonOutlineOutlinedIcon className="header-icon" />
          <div className="box-vn position-relative" style={{ width: "2rem" }}>
            <img
              className="langue-vi position-absolute top-50 translate-middle-y"
              src="https://shopdunk.com/images/flags/vn.png"
              alt=""
            />
          </div>
          <div className="box-en position-relative" style={{ width: "2rem" }}>
            <img
              src="https://shopdunk.com/images/flags/us.png"
              alt=""
              className="langue-en position-absolute top-50 translate-middle-y"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
