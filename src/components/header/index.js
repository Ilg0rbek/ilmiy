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
    UZ: { translation: translationUZ },
    US: { translation: translationEN },
    RU: { translation: translationRU },
  },
  lng: "UZ",
  fallbackLng: "UZ"
})


function Header() {

  const [active, setActive] = useState("navbar");
  const [selected, setSelected] = useState("UZ");
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
              {t("AndijonDavlatsUniversiteti")} <br /> {t("univer")}
            </h2>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <ReactFlagsSelect
              className="for-language"
              selected={selected}
              countries={["UZ", "US", "RU",]}
              customLabels={{ "UZ": "UZ", "US": "ENG", "RU": "RUS" }}
              onSelect={(code) => changeLangHandler(code)}
            />
          </div>
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
        <div style={{ border: "1px solid white", minHeight: "3vh", margin: "0 5px" }} />
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
              <div>
              </div>
              <div className="dropdown-item hoverDropItem">
                {t("Quota")}
                <div className="quotasubmenu">
                  <ul style={{ listStyle: "none" }}>
                    <li>
                      <a
                        className="dropdown-item"
                        target="_blank"
                        href="https://res.cloudinary.com/dax5cx2sv/image/upload/v1710820443/kvota.pdf"
                      >
                        {t("Quota2024")}
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        target="_blank"
                        href="https://res.cloudinary.com/dax5cx2sv/image/upload/v1729760154/kvota_j06paw.pdf"
                      >
                        {t("Quota2025")}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="https://res.cloudinary.com/dax5cx2sv/image/upload/v1729760162/yonalishlar_n3oglm.pdf"
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

        <div style={{ border: "1px solid white", minHeight: "3vh", margin: "0 5px" }} />
        <div className="dropdown">
          <a
            className="dropdown-toggle"
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
                    {t("CommodityCHemistryAndFolkMedicine")}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={"/Ozbekiston tarixi"}>
                    {t("HistoryOfUzbekistan")}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={"/Menejment"}>
                    {t("Management")}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={"/Ozbek tili"}>
                    {t("UzbekLanguage")}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={"/Ozbek adabiyoti"}>
                    {t("UzbekLiterature")}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to={"/Ijtimoiy falsafa"}>
                    {t("SocialPhilosophy")}
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to={"/Bialogiya fanlari boyicha"}
                  >
                    {t("inBiologicalSciencesv")}
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                {t("ScientificAndTechnicalCouncil")}
              </a>
              <ul className="dropdown-menu dropdown-submenu">
                <li>
                  <a
                    className="dropdown-item"
                    href="https://res.cloudinary.com/dax5cx2sv/image/upload/v1710820460/Nizom_buw2by.pdf"
                    target="_blank"
                  >
                    {t("StatuteOfTHeScientificAndTechnicalCouncil")}
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://res.cloudinary.com/dax5cx2sv/image/upload/v1710820420/kengash_nqovdd.pdf"
                    target="_blank"
                  >
                    {t("CompositionOfTHeScientificAndTechnicalCouncil")}
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div style={{ border: "1px solid white", minHeight: "3vh", margin: "0 5px" }} />
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
                {t("StateGrant")}
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to={"/Universitet granti"}>
                {t("ForeignGrant")}
              </Link>
            </li>
          </ul>
        </div>
        <div style={{ border: "1px solid white", minHeight: "3vh", margin: "0 5px" }} />
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
        <div style={{ border: "1px solid white", minHeight: "3vh", margin: "0 5px" }} />
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
        <div style={{ border: "1px solid white", minHeight: "3vh", margin: "0 5px" }} />
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
        <div style={{ border: "1px solid white", minHeight: "3vh", margin: "0 5px" }} />
        <ul className="menu_ul nav_item">
          <li>
            <Link to="#">{t('ScientificConferences')}</Link>
          </li>
        </ul>
        <div style={{ border: "1px solid white", minHeight: "3vh", margin: "0 5px" }} />
        <ul className="menu_ul nav_item">
          <li>
            <Link to="/academic-years">MD MAVZULARI</Link>
          </li>
        </ul>

      </nav>
    </main>
  );
}
export default Header;
