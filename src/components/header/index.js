import React, { useState } from "react";
import "./header.css";
import { FaAlignJustify } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import Kvota from "../../assets/kvota.pdf";

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
      <nav class={`navbar-expand-lg ${active}`}>
        <ul className="menu_ul nav_item">
          <li>
            <Link to="/">bosh sahifa </Link>
          </li>
        </ul>
        <div class="dropdown nav_item">
          <a
            class="  dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            doktorantura
          </a>
          <ul class="dropdown-menu">
            <li>
              <a
                class="dropdown-item"
                href="https://phd.mininnovation.uz/regulation"
                target="_blank"
              >
                Meyoriy huhuqiy hujjat
              </a>
            </li>
            <li>
              <a
                class="dropdown-item"
                href="https://phd.mininnovation.uz/required-docs"
                target="_blank"
              >
                kerakli ro'yxatlar hujjati
              </a>
            </li>
            <li>
              <a class="dropdown-item" href={Kvota} target="_blank">
                Kvota 2024
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Doktorantura yo'nalishlari
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Doktorantlar
              </a>
            </li>
            <li>
              <a
                class="dropdown-item"
                href="http://minimum.adu.uz/"
                target="_blank"
              >
                Malakaviy imtihonlar
              </a>
            </li>
          </ul>
        </div>

        <div class="dropdown">
          <a
            class="  dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Ilmiy kengashlar
          </a>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
              <a class="dropdown-item" href="#">
                Ilmiy daraja beruvchi kengash &raquo;
              </a>
              <ul class="dropdown-menu dropdown-submenu">
                <li>
                  <a class="dropdown-item" href="#">
                    "Tovarlar kimyosi" va "Xalq tabobati"
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    O'zbekiston tarixi
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Menejment
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    O'zbek tili
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    O'zbek adabiyoti
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Ijtimoiy falsafa
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Biologiya fanlari bo'yicha
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Ilmiy texnik kengash
              </a>
            </li>
          </ul>
        </div>

        <div class="dropdown nav_item">
          <a
            class="  dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            ilmiy loyihalar
          </a>
          <ul class="dropdown-menu ">
            <li>
              <a class="dropdown-item" href="#">
                Davlat grandi
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Univesitet grandi
              </a>
            </li>
          </ul>
        </div>
        <div class="dropdown nav_item">
          <a
            class="  dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            intellektual mulk obyektlari
          </a>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Patentlar
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Guvohnomalar
              </a>
            </li>
          </ul>
        </div>
        <div class="dropdown nav_item">
          <a
            class="  dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            jurnallar
          </a>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Fizika-matematika tadqiqotlari
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                {" "}
                Gumanitar tadqiqotlar
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Pedagogik tadqiqotlar.{" "}
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                {" "}
                Kimyo tadqiqotlari.
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                {" "}
                Biologik tadqiqotlar.
              </a>
            </li>
          </ul>
        </div>
        <div class="dropdown nav_item">
          <a
            class="  dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            iqtidorli talaba
          </a>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                fan to'garaklari
              </a>
            </li>
            <li>
              <Link class="dropdown-item" to={"/stipendiants"}>
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
