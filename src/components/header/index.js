import React, { useState } from "react";
import "./header.css";
import { FaAlignJustify } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import Kvota from "../../assets/kvota.pdf";
import Doktarant from "../../assets/doktarantura.pdf";
import Texnik from "../../assets/kengash.pdf";

function Header() {
  const [active, setActive] = useState("navbar");

  const navToggle = () => {
    active === "navbar"
      ? setActive("navbar  navbar_active")
      : setActive("navbar");
  };
  return (
    <main>
      <header>
        <div className="logo">
          <div className="img_div"></div>
          <h2>
            andijon davlat <br /> universiteti
          </h2>
        </div>
        <div className="btn_menu" onClick={navToggle}>
          {active === "navbar" ? <FaAlignJustify /> : <BsXLg />}
        </div>
      </header>
      <nav className={`navbar-expand-lg ${active}`}>
        <ul className="menu_ul nav_item">
          <li>
            <Link to="/">bosh sahifa </Link>
          </li>
        </ul>
        <div className="dropdown nav_item">
          <a
            className="  dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            doktorantura
          </a>
          <ul className="dropdown-menu">
            <li>
              <a
                className="dropdown-item"
                href="https://phd.mininnovation.uz/regulation"
                target="_blank"
              >
                Meyoriy huhuqiy hujjat
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="https://phd.mininnovation.uz/required-docs"
                target="_blank"
              >
                kerakli ro'yxatlar hujjati
              </a>
            </li>
            <li>
              <a className="dropdown-item" href={Kvota} target="_blank">
                Kvota 2024
              </a>
            </li>
            <li>
              <a className="dropdown-item" href={Doktarant} target="_blank">
                Doktorantura yo'nalishlari
              </a>
            </li>
            <li>
              <Link className="dropdown-item" to={"/login"}>
                Doktorantlar
              </Link>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="http://minimum.adu.uz/"
                target="_blank"
              >
                Malakaviy imtihonlar
              </a>
            </li>
          </ul>
        </div>

        <div className="dropdown">
          <a
            className="  dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Ilmiy kengashlar
          </a>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
              <a className="dropdown-item" href="#">
                Ilmiy daraja beruvchi kengash &raquo;
              </a>
              <ul className="dropdown-menu dropdown-submenu">
                <li>
                  <a className="dropdown-item" href="#">
                    "Tovarlar kimyosi" va "Xalq tabobati"
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    O'zbekiston tarixi
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Menejment
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    O'zbek tili
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    O'zbek adabiyoti
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Ijtimoiy falsafa
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Biologiya fanlari bo'yicha
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Ilmiy texnik kengash &raquo;
              </a>
              <ul className="dropdown-menu dropdown-submenu">
                <li>
                  <a className="dropdown-item" href="#">
                    Ilmiy texnik kengash nizomi
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href={Texnik} target="_blank">
                    Ilmiy texnik kengash tarkibi
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="dropdown nav_item">
          <a
            className="  dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            ilmiy loyihalar
          </a>
          <ul className="dropdown-menu ">
            <li>
              <a className="dropdown-item" href="#">
                Davlat granti
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Univesitet granti
              </a>
            </li>
          </ul>
        </div>
        <div className="dropdown nav_item">
          <a
            className="dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            intellektual mulk obyektlari
          </a>
          <ul className="dropdown-menu">
            <Link>
              <li>
                <a className="dropdown-item">
                  Patentlar
                </a>
              </li>
            </Link>
            <li>
              <a className="dropdown-item" href="#">
                Guvohnomalar
              </a>
            </li>
          </ul>
        </div>
        <div className="dropdown nav_item">
          <a
            className="  dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            jurnallar
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Fizika-matematika tadqiqotlari
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Gumanitar tadqiqotlar
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Pedagogik tadqiqotlar.
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Kimyo tadqiqotlari.
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Biologik tadqiqotlar.
              </a>
            </li>
          </ul>
        </div>
        <div className="dropdown nav_item">
          <a
            className="  dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            iqtidorli talaba
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to="/patents">
                fan to'garaklari
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to={"/stipendiants"}>
                stipendiatlar
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </main>
  );
}
export default Header;
