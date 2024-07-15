import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer-box">
      <div className="container p-0 mx-auto">
        <div className="grid grid-cols-3">
          <div className="col-span-1 ps-0 pr-24.5">
            <div className="footer-logo">
              <img
                className="w-72"
                src="https://shopdunk.com/images/thumbs/0027333_logo-shopdunk.png"
                alt=""
              />
            </div>
            <div className="footer-decription">
              Năm 2020, ShopDunk trở thành đại lý ủy quyền của Apple. Chúng tôi
              phát triển chuỗi cửa hàng tiêu chuẩn và Apple Mono Store nhằm mang
              đến trải nghiệm tốt nhất về sản phẩm và dịch vụ của Apple cho
              người dùng Việt Nam.
            </div>
            <div className="custom-box p-5 rounded-xl mb-5">
              <div className="custom-title mt-6 mb-8 text-black font-bold">
                Support switchboard :
              </div>
              <div className="custom-decription flex items-end justify-center text-black mb-3">
                <div className="title text-xl mr-2">Buy product:</div>
                <div className="phone-number text-2xl">
                  1900.6626 (08:00 - 22:00)
                </div>
              </div>
              <div className="custom-decription flex items-end justify-center text-black mb-3">
                <div className="title text-xl mr-2">Guarantee:</div>
                <div className="phone-number text-2xl">
                  1900.6626 (08:00 - 22:00)
                </div>
              </div>
            </div>
            <div className="media-chanel pt-14 flex">
              <div className="fb-box">
                <img src="/assets/icons/icon-fb.png" alt="" />
              </div>
              <div className="yt-box">
                <img src="/assets/icons/icon-yt.png" alt="" />
              </div>
              <div className="zl-box">
                <img src="/assets/icons/icon-zalo.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="grid grid-cols-3">
              <div className="col-4 ps-5">
                <div className="title mb-3">Infomation</div>
                <ul className="p-0">
                  <li className="footer-nav">News</li>
                  <li className="footer-nav">About Us</li>
                  <li className="footer-nav">Check IMEI</li>
                  <li className="footer-nav">Payment Methods</li>
                  <li className="footer-nav">Retail Space Rental</li>
                  <li className="footer-nav">Warranty and Repair</li>
                  <li className="footer-nav">Quality Assessment, Complaints</li>
                  <li className="footer-nav">Electronic Invoice Lookup</li>
                </ul>
              </div>
              <div className="col-4 ps-5">
                <div className="title mb-3">Infomation</div>
                <ul className="p-0">
                  <li className="footer-nav">News</li>
                  <li className="footer-nav">About Us</li>
                  <li className="footer-nav">Check IMEI</li>
                  <li className="footer-nav">Payment Methods</li>
                  <li className="footer-nav">Retail Space Rental</li>
                  <li className="footer-nav">Warranty and Repair</li>
                  <li className="footer-nav">Quality Assessment, Complaints</li>
                  <li className="footer-nav">Electronic Invoice Lookup</li>
                </ul>
              </div>
              <div className="col-4 ps-5">
                <div className="title mb-3">Infomation</div>
                <ul className="p-0">
                  <li className="footer-nav">News</li>
                  <li className="footer-nav">About Us</li>
                  <li className="footer-nav">Check IMEI</li>
                  <li className="footer-nav">Payment Methods</li>
                  <li className="footer-nav">Retail Space Rental</li>
                  <li className="footer-nav">Warranty and Repair</li>
                  <li className="footer-nav">Quality Assessment, Complaints</li>
                  <li className="footer-nav">Electronic Invoice Lookup</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="certification w-100"></div>
        <div className="footer-lower pt-9 pb-4">
          <div className="footer-disclaimer grid grid-cols-8">
            <div className="footer-certificate  col-span-7">
              © 2016 Công ty Cổ Phần HESMAN Việt Nam GPDKKD: 0107465657 do Sở KH
              & ĐT TP. Hà Nội cấp ngày 08/06/2016.
              <br />
              Địa chỉ: Số 76 Thái Hà, phường Trung Liệt, quận Đống Đa, thành phố
              Hà Nội, Việt Nam
              <br />
              Đại diện pháp luật: PHẠM MẠNH HÒA | ĐT: 0247.305.9999 | Email:
              lienhe@shopdunk.com
            </div>
            <div className="icon text-end">
              <a
                className="w-full text-end"
                href="http://online.gov.vn/(X(1)S(jfktnnku5rui3vjf5pnk4sgc))/Home/WebDetails/34144?AspxAutoDetectCookieSupport=1"
              >
                <img
                  src="/assets/images/mores/chungchi-bocongthuong.png"
                  className="w-75"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
