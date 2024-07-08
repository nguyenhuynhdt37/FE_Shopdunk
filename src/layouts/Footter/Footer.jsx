import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer-box">
      <div className="container p-0">
        <div className="row footer-box-router">
          <div
            className="col-4 ps-0 pe-5"
            style={{ paddingRight: "4.5rem !important" }}
          >
            <div className="footer-logo">
              <img
                className="w-50 object-fit-cover"
                src="https://shopdunk.com/images/thumbs/0027333_logo-shopdunk.png"
                alt=""
              />
            </div>
            <div className="footer-decription">
              In 2020, ShopDunk became an authorized Apple dealer. We develop a
              chain of standard stores and Apple Mono Stores to bring the best
              experience of Apple products and services to Vietnamese users.
            </div>
            <div className="custom-box p-3 rounded-4 mb-5">
              <div className="custom-title my-3 text-dark fw-bolder">
                Support switchboard :
              </div>
              <div className="custom-decription d-flex align-items-end justify-content-center text-dark mb-3">
                <div className="title fs-5 me-2">Buy product:</div>
                <div className="phone-number fs-4">
                  1900.6626 (08:00 - 22:00)
                </div>
              </div>
              <div className="custom-decription d-flex mb-3 align-items-end justify-content-center  text-dark">
                <div className="title fs-5 me-2">Guarantee:</div>
                <div className="phone-number fs-4">
                  1900.6626 (08:00 - 22:00)
                </div>
              </div>
            </div>
            <div className="media-chanel pt-4 d-flex">
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
          <div className="col-8 ">
            <div className="row">
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
        <div className="footer-lower pt-4 pb-4">
          <div className="footer-disclaimer row ">
            <div className="footer-certificate col-10">
              © 2016 Công ty Cổ Phần HESMAN Việt Nam GPDKKD: 0107465657 do Sở KH & ĐT TP. Hà Nội cấp ngày 08/06/2016.
              <br />
              Địa chỉ: Số 76 Thái Hà, phường Trung Liệt, quận Đống Đa, thành phố Hà Nội, Việt Nam
              <br />
              Đại diện pháp luật: PHẠM MẠNH HÒA | ĐT: 0247.305.9999 | Email: lienhe@shopdunk.com
            </div>
            <div className="icon col-2 text-end">
              <a className="w-100 text-end" href="http://online.gov.vn/(X(1)S(jfktnnku5rui3vjf5pnk4sgc))/Home/WebDetails/34144?AspxAutoDetectCookieSupport=1" className="navigation-certificate">
                <img src="/assets/images/mores/chungchi-bocongthuong.png" className="w-75" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Footer;
