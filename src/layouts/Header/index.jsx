import { Link } from 'react-router-dom'
import { IoIosSearch } from 'react-icons/io'
import { LiaUser } from 'react-icons/lia'
import './Header.scss'
const Header = () => {
  return (
    <header
      className="header__box w-full bg-bgHeader sticky top-0 z-20"
      style={{ height: '6.4rem' }}
    >
      <div className="container mx-auto my-0 h-full flex items-center justify-between">
        <div className="header__logo--box h-full flex items-center">
          <div className="boxx2">
            <Link to="/">
              {' '}
              <img
                src="https://shopdunk.com/images/thumbs/0027333_logo-shopdunk.png"
                alt="logo"
                className="header_logo object-cover"
                style={{ width: '17.5rem' }}
              />
            </Link>
          </div>
        </div>
        <ul className="header__router--box h-full flex flex-1 justify-around">
          <li className=" hover:bg-bgHeaderHover text-textHeader px-6 py-6 text-2xl h-full flex items-center ">
            <a href="/">iPhone</a>
          </li>
          <li className=" hover:bg-bgHeaderHover text-textHeader px-6 py-6 text-2xl h-full flex items-center">
            <a href="/">iPad</a>
          </li>
          <li className=" hover:bg-bgHeaderHover text-textHeader px-6 py-6 text-2xl h-full flex items-center">
            <a href="/">Mac</a>
          </li>
          <li className=" hover:bg-bgHeaderHover text-textHeader px-6 py-6 text-2xl h-full flex items-center">
            <a href="/">Watch</a>
          </li>
          <li className=" hover:bg-bgHeaderHover text-textHeader px-6 py-6 text-2xl h-full flex items-center">
            <a href="/">Old Product</a>
          </li>
          <li className=" hover:bg-bgHeaderHover text-textHeader px-6 py-6 text-2xl h-full flex items-center">
            <a href="/">Accessory</a>
          </li>
          <li className=" hover:bg-bgHeaderHover text-textHeader px-6 py-6 text-2xl h-full flex items-center">
            <a href="/">Service</a>
          </li>
          <li className=" hover:bg-bgHeaderHover text-textHeader px-6 py-6 text-2xl h-full flex items-center">
            <a href="/">News</a>
          </li>
          <li className=" hover:bg-bgHeaderHover text-textHeader px-6 py-6 text-2xl h-full flex items-center">
            <a href="/">Discount</a>
          </li>
        </ul>
        <div className="header_features h-100 flex items-center cursor-pointer fs-5 text-white text-4xl">
          <IoIosSearch className="mr-4" />
          <div className="icon-cart mr-4">
            <Link to="/cart">
              <img src="/assets/icons/icon-cart.png" className="w-9" alt="" />
            </Link>
          </div>
          <Link to="/register">
            <LiaUser className="mr-4" />
          </Link>
          <div className="box-vn mr-4" style={{ width: '2rem' }}>
            <img
              className="langue-vi "
              src="https://shopdunk.com/images/flags/vn.png"
              alt=""
            />
          </div>
          <div className="box-en" style={{ width: '2rem' }}>
            <img
              src="https://shopdunk.com/images/flags/us.png"
              alt=""
              className="langue-en"
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
