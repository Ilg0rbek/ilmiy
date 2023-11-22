import React from "react";
import "./footer.css";
import {
  BsTelegram,
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsYoutube,
} from "react-icons/bs";
// import { useTranslation } from "react-i18next";

function Footer() {
//   const { t, i18n } = useTranslation();

  const thisYear = new Date().getFullYear();

  return (
    <div className="footer_wrap">
      <div className="footer_main container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-12  col_style1">
            <div className="footer_logo_text_main">
              <div className="footer_logo">
                <img
                  src="https://adu.uz/s/files/images/logoadu.png"
                  alt="footer_logo"
                />
              </div>
              <p className="footer_logo_title">
              Zahiriddin Muhammad Bobur nomidagi Andijon davlat universiteti
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12  col_style2">
            <div className="bottom-contacts-address-text">
              <span>MANZILIMIZ</span>
              <p> 170100, O'zbekiston Respublikasi,</p>
              <p> Andijon shahar, Universitet ko'chasi 129-uy</p>
              <p>
                <b>E-pochta:</b>agsu_info@edu.uz
              </p>
              <p>
                <b>Telefon/faks:</b>0 (374) 223 88 30
              </p>
              <p>
                <b>Ishonch Telefoni:</b>0 (374) 223 88 14
              </p>
              <p>Transport: 75-yo'nalishdagi taksilar</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12  col_style3">
            <iframe
              className="iframe_style"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.8130156874026!2d72.37047311565718!3d40.788124740891334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bcec8187a14f81%3A0x82b53c72a937651f!2z0JDQvdC00LjQttCw0L3RgdC60LjQuSDQs9C-0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgg!5e0!3m2!1sru!2s!4v1674121799641!5m2!1sru!2s"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12  social_wrap col_style4">
            <div className="social">
              <a href="httpst.me/adu_uz " target={"_blank"}>
                <div className="social_icon">
                  <BsTelegram className="icon_color" />
                </div>
              </a>
              <a href="http://www.fb.com/andsu.uz" target={"_blank"}>
                <div className="social_icon">
                  <BsFacebook className="icon_color" />
                </div>
              </a>
              <a href="http://www.instagram.com/aduuzb" target={"_blank"}>
                <div className="social_icon">
                  <BsInstagram className="icon_color" />
                </div>
              </a>
              <a href="http://www.twitter.com/adu_uz" target={"_blank"}>
                <div className="social_icon">
                  <BsTwitter className="icon_color" />
                </div>
              </a>
              <a href="https://www.youtube.com/c/aduuz" target={"_blank"}>
                <div className="social_icon">
                  <BsYoutube className="icon_color" />
                </div>
              </a>
            </div>
            <div className="text_universitet">
              <p className="m-0">
                &copy; Andijon davlat universiteti, 2004-{thisYear}. Barcha
                <br />
                huquqlar himoyalangan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
