import { useRef, useState } from "react";
import { RxCaretRight } from "react-icons/rx";
import { Link } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { login } from "../../api/userApi";
import { isEmpty, isPasswordValid } from "../../../Utils/validation";

const Login = () => {
  const ref = useRef();
  const [data, setData] = useState({});
  const [dataError, setDataError] = useState({});
  const [rememberMe, setRememberMe] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    setDataError({ ...dataError, [name]: "", sever: [] });
  };
  const checkinValidation = () => {
    let newError = {};
    if (isEmpty(data.username))
      newError.username = "Tài khoản không được bỏ trống";
    if (!isEmpty(data.username) && data.username.length < 8) {
      newError.username = "Tài khoản phải đủ 8 ký tự đổ lên";
    }
    if (!(!isEmpty(data.password) && isPasswordValid(data.password))) {
      newError.password =
        "Mật khẩu phải bao gồm 8 chữ số bao gồm chữ hoa, chữ thường và ký tự đặc biệt";
    }
    return newError;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setDataError({});
    const listError = checkinValidation();
    if (Object.keys(listError).length > 0) {
      setDataError(listError);
      return;
    }
    ref.current.continuousStart();
    const datapost = {
      UserName: data.username,
      PasswordHash: data.password,
    };
    const { data: loginData, error: isError } = await login(datapost);
    if (isError) {
      setDataError({
        sever: isError.response.data,
      });
    }
    console.log(loginData);
    ref.current.complete();
  };

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
            {dataError.sever && (
              <div className="error pb-10">
                {dataError.sever.map((value, index) => {
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
              {dataError.username && (
                <p className="error pt-3 text-red">{dataError.username}</p>
              )}
            </div>
            <div className="box-input text-2xl mb-8">
              <div className="title mb-2 font-medium">Mật khẩu:</div>
              <input
                className="px-4 py-5 border rounded-xl w-full focus:outline-none focus:border-primary1"
                type="password"
                name="password"
                value={data.password ?? ""}
                onChange={(e) => handleInputChange(e)}
              />
              {dataError.password && (
                <p className="error pt-3 text-red">{dataError.password}</p>
              )}
            </div>
            <div className="function-more flex px-2 text-2xl justify-between">
              <div className="save-password flex items-center text-zinc-500">
                <input
                  type="checkbox"
                  className="cursor-pointer mr-4 w-[1.6rem] h-[1.6rem]"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
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
