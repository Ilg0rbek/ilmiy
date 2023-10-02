import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Stipendiants = () => {
  const data = useSelector((state) => state.studentReducer);

  console.log(data);

  return (
    <div className="container">
      <h3 className="yeartitle">
        <Link className="link" to={"/grands"}>
          2022 / 2023 o'quv yilidagi stipendiant talabalar{" "}
        </Link>
      </h3>
    </div>
  );
};

export default Stipendiants;
