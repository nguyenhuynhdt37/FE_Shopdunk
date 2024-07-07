import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer-box">
      <div className="container p-0">
        <div className="row">
          <div
            className="col-4 ps-0"
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
              <div className="col-4">
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
              <div className="col-4 ps-4">
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
              <div className="col-4 ps-4">
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
        <div className="certification bg-primary mt-5 pb-5"></div>
      </div>
    </div>
  );
};

export default Footer;
