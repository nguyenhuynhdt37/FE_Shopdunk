import { Link } from 'react-router-dom'
import { IoIosSearch } from 'react-icons/io'
import { LiaUser } from 'react-icons/lia'
import './Header.scss'
import Tippy from '@tippyjs/react'
import {
  ModalAuthInfomaiton,
  ModalAuthLogInOrRegister,
} from '../../components/Header/ModalAuth'
import { useSelector } from 'react-redux'

const Header = () => {
  const user = useSelector((state) => state.auth.user)
  return (
    <header
      className="header__box w-full bg-bgHeader sticky top-0 z-20"
      style={{ height: '6.4rem' }}
    >
      <div className="container mx-auto my-0 h-full flex items-center justify-between">
        <div className="header__logo--box h-full flex items-center">
          <div className="boxx2">
            <Link to="/">
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
          <Link to="/category/1">
            <li className=" hover:bg-bgHeaderHover text-textHeader px-6 py-6 text-2xl h-full flex items-center ">
              iPhone
            </li>
          </Link>
          <Link>
            <li className=" hover:bg-bgHeaderHover text-textHeader px-6 py-6 text-2xl h-full flex items-center">
              iPad
            </li>
          </Link>
          <Link>
            <li className=" hover:bg-bgHeaderHover text-textHeader px-6 py-6 text-2xl h-full flex items-center">
              Mac
            </li>
          </Link>
          <Link>
            <li className=" hover:bg-bgHeaderHover text-textHeader px-6 py-6 text-2xl h-full flex items-center">
              Watch
            </li>
          </Link>
          <Link>
            <li className=" hover:bg-bgHeaderHover text-textHeader px-6 py-6 text-2xl h-full flex items-center">
              Old Product
            </li>
          </Link>
          <Link>
            <li className=" hover:bg-bgHeaderHover text-textHeader px-6 py-6 text-2xl h-full flex items-center">
              Accessory
            </li>
          </Link>
          <Link>
            <li className=" hover:bg-bgHeaderHover text-textHeader px-6 py-6 text-2xl h-full flex items-center">
              Service
            </li>
          </Link>
          <Link>
            <li className=" hover:bg-bgHeaderHover text-textHeader px-6 py-6 text-2xl h-full flex items-center">
              News
            </li>
          </Link>
          <Link>
            <li className=" hover:bg-bgHeaderHover text-textHeader px-6 py-6 text-2xl h-full flex items-center">
              Discount
            </li>
          </Link>
        </ul>
        <div className="header_features h-100 flex items-center cursor-pointer fs-5 text-white text-4xl">
          <Tippy content="Search" theme="light" arrow={true}>
            <div>
              <IoIosSearch className="mr-4" />
            </div>
          </Tippy>

          <Tippy content="Cart" theme="light" arrow={true}>
            <div className="icon-cart mr-4">
              <Link to="/cart">
                <img src="/assets/icons/icon-cart.png" className="w-9" alt="" />
              </Link>
            </div>
          </Tippy>
          {user &&
          Object.keys(user).length > 0 &&
          Object.values(user).length > 0 ? (
            <Tippy
              content={<ModalAuthInfomaiton />}
              placement="bottom"
              theme="light"
              offset={[35, 10]}
              interactive={true}
              arrow={false}
            >
              <div className="h-full rounded-full bg-white p-0.5 mr-4">
                {user.avatar ? (
                  <img
                    className="rounded-full w-10 object-cover"
                    src={user.avatar}
                  />
                ) : (
                  <img
                    className="rounded-full w-10 object-cover"
                    src="https://anhdepfree.com/wp-content/uploads/2020/06/icon-facebook-buon-dep.pngs"
                  />
                )}
              </div>
            </Tippy>
          ) : (
            <Tippy
              content={<ModalAuthLogInOrRegister />}
              placement="bottom" // Đặt modal ở dưới phần tử
              interactive={true} // Cho phép tương tác với modal
              theme="light"
              arrow={false}
              offset={[60, 10]}
              // trigger="click" // Modal sẽ xuất hiện khi click
            >
              <div>
                <LiaUser className="mr-4" />
              </div>
            </Tippy>
          )}
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
