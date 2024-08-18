import axios from "axios";
import { useRef, useState } from "react";
import { RxCaretRight } from "react-icons/rx";
import { Link } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const Login = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState([]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    if (error.length > 0) setError([]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError([]);
    try {
      ref.current.continuousStart();
      const datapost = {
        UserName: data.username,
        PasswordHash: data.password,
      };
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await axios.post(`${apiUrl}/api/users/login`, datapost, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        console.log(response.data);
      } else {
        console.log("không đăng nhập được");
      }
    } catch (error) {
      console.log(error.response.data);

      setError(error.response.data);
    } finally {
      ref.current.complete();
    }
  };
  const ref = useRef();
  return (
    <div className="bg-white">
      <LoadingBar color="#0066df" ref={ref} />
      <div className="container mx-auto text-xl mb-40">
        <ul className="box-nav-bar py-3 flex leading-11 text-xl">
          <li className="item flex items-center">
            <Link to="/">Trang chủ</Link>
            <RxCaretRight className="w-10 relative top-0.5" />
          </li>
          <li className="item mr-2 flex items-center">
            <Link to="/">Đăng nhập</Link>
          </li>
        </ul>
        <div className="content grid grid-cols-12 gap-x-5 py-24 px-8">
          <div className="img col-span-7 pe-20">
            <img
              src="https://shopdunk.com/images/uploaded/banner/VNU_M492_08%201.jpeg"
              alt=""
              height="999"
            />
          </div>
          <div className="col-span-5">
            {error && error.length > 0 && (
              <div className="error pb-10">
                {error.map((value, index) => {
                  return (
                    <div className="error text-red text-2xl mb-30" key={index}>
                      {value}
                    </div>
                  );
                })}
              </div>
            )}

            <div className="title text-5xl font-medium mb-10">Đăng nhập</div>
            <div className="box-input text-2xl mb-8 pt-10">
              <div className="title mb-2 font-medium">Tên tài khoản:</div>
              <input
                className="px-4 py-5 border rounded-xl w-full focus:outline-none focus:border-primary1"
                type="text"
                name="username"
                value={data.username ?? ""}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="box-input text-2xl mb-8">
              <div className="title mb-2 font-medium">Mật khẩu:</div>
              <input
                className="px-4 py-5 border rounded-xl w-full focus:outline-none focus:border-primary1"
                type="password"
                name="password"
                value={data.password}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="function-more flex px-2 text-2xl justify-between">
              <div className="save-password flex items-center text-zinc-500">
                <input
                  type="checkbox"
                  className="cursor-pointer mr-4 w-[1.6rem] h-[1.6rem]"
                />
                Nhớ mật khẩu
              </div>
              <div className="forget-password">
                <Link to="/" className="text-primary1">
                  Quên mật khẩu?
                </Link>
              </div>
            </div>
            <div
              className="btnsubmit mt-10 text-center py-6 bg-primary1 rounded-xl text-2xl text-white font-medium cursor-pointer "
              type="submit"
              onClick={(e) => handleSubmit(e)}
            >
              Đăng nhập
            </div>
            <div className="create text-[1.6rem] pt-6">
              <span className="me-4">Bạn chưa có tài khoản?</span>
              <Link to="/register" className="text-primary1">
                Tạo tài khoản ngay
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
