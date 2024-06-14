import React, { useState } from "react";
import "./header.css";
import { FaAlignJustify } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import ReactFlagsSelect from "react-flags-select";
import i18next from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import translationRU from "../../locale/translationRU";
import translationUZ from "../../locale/translationUz";
import translationEN from "../../locale/translationEn";


i18next.use(initReactI18next).init({
  resources: {
    RU: { translation: translationRU },
    UZ: { translation: translationUZ },
    US: { translation: translationEN }
  },
  lng: "RU",
  fallbackLng: "RU"
})


function Header() {

  const [active, setActive] = useState("navbar");
  const [selected, setSelected] = useState("RU");
  const { t } = useTranslation()

  const navToggle = () => {
    active === "navbar"
      ? setActive("navbar  navbar_active")
      : setActive("navbar");
  };

  const changeLangHandler = (e) => {
    i18next.changeLanguage(e)
    setSelected(e)
  }


  return (
    <main>
      <header>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className="logo">
            <div className="img_div"></div>
            <h2>
              Andijon davlats <br /> universiteti
            </h2>
          </div>
          <ReactFlagsSelect
            className="for-language"
            selected={selected}
            countries={["RU", "UZ", "US"]}
            onSelect={(code) => changeLangHandler(code)}
          />
        </div>

        <div className="btn_menu" onClick={navToggle}>
          {active === "navbar" ? <FaAlignJustify /> : <BsXLg />}
        </div>
      </header>
      <nav className={`navbar-expand-lg ${active}`}>
        <ul className="menu_ul nav_item">
          <li>
            <Link to="/">{t("MainPage")}</Link>
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
            {t("Doctorate")}
          </a>
          <ul className="dropdown-menu">
            <li>
              <a
                className="dropdown-item"
                href="https://phd.mininnovation.uz/regulation"
                target="_blank"
              >
               {t("Regulation")}
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="https://phd.mininnovation.uz/required-docs"
                target="_blank"
              >
                {t("ListofRequiredDocuments")}
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="https://res.cloudinary.com/dax5cx2sv/image/upload/v1710820443/kvota.pdf"
                target="_blank"
              >
                {t("Quota")}
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="https://res.cloudinary.com/dax5cx2sv/image/upload/v1710820371/doktarantura.pdf"
                target="_blank"
              >
                {t("SpecialtiesOfDoctorate")}
              </a>
            </li>
            <li>
              <Link className="dropdown-item" to={"/login"}>
              {t("Doctorates")}
              </Link>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="http://minimum.adu.uz/"
                target="_blank"
              >
                {t("QualificationExams")}
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
            {t("ScientificCouncil")}
          </a>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
              <a className="dropdown-item" href="#">
              {t("ScientificAdvice")}
              </a>
              <ul className="dropdown-menu dropdown-submenu">
                <li>
                  <Link
                    className="dropdown-item"
                    to={"/tavarlar kimyosi va halq tabobati"}
                  >
                    Tovarlar kimyosi va Xalq tabobati
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={"/Ozbekiston tarixi"}>
                    O'zbekiston tarixi
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={"/Menejment"}>
                    Menejment
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={"/Ozbek tili"}>
                    O'zbek tili
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={"/Ozbek adabiyoti"}>
                    O'zbek adabiyoti
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={"/Ijtimoiy falsafa"}>
                    Ijtimoiy falsafa
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to={"/Bialogiya fanlari boyicha"}
                  >
                    Biologiya fanlari bo'yicha
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Ilmiy texnik kengash 
              </a>
              <ul className="dropdown-menu dropdown-submenu">
                <li>
                  <a
                    className="dropdown-item"
                    href="https://res.cloudinary.com/dax5cx2sv/image/upload/v1710820460/Nizom_buw2by.pdf"
                    target="_blank"
                  >
                    Ilmiy texnik kengash nizomi
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://res.cloudinary.com/dax5cx2sv/image/upload/v1710820420/kengash_nqovdd.pdf"
                    target="_blank"
                  >
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
            {t("ScientificProjects")}
          </a>
          <ul className="dropdown-menu ">
            <li>
              <Link className="dropdown-item" to={"/Davlat granti"}>
                Davlat granti
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to={"/Universitet granti"}>
                Xorijiy granti
              </Link>
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
             {t("ObjectsOfIntellectualProperty")}
          </a>
          <ul className="dropdown-menu">
            <Link className="dropdown-item" to={"/patents"}>
              <li> {t("Patents")}</li>
            </Link>
            <li>
              <Link className="dropdown-item" to="/guvohnoma">
              {t("Certificates")}
              </Link>
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
            {t("Journals")}
          </a>
          <ul className="dropdown-menu">
            <li>
              <a
                className="dropdown-item"
                href="https://www.ajhuman.uz/"
                target="_blank"
              >
                {t("HumanitarianResearch")}
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="https://www.ajpedagogical.uz/"
                target="_blank"
              >
                {t("pedagogicalResearch")}
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="https://www.ajchemical.uz/"
                target="_blank"
              >
                {t("ChemicalResearch")}
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="https://www.ajbiological.uz/"
                target="_blank"
              >
                {t("BiologicalResearch")}
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
              {t("PhysicsAndMathematics")}
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
            {t("TalentedStudents")}
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to="/cources">
              {t("ScientificCircles")}
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to={"/stipendiants"}>
              {t("ScholarshipByTheGovernments")}
              </Link>
            </li>
          </ul>
        </div>
        <ul className="menu_ul nav_item">
          <li>
            <Link to="/faculty">BMI va MD</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
export default Header;
