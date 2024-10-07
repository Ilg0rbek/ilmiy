import { Link } from "react-router-dom";
import styles from "./academicYears.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

function AcademicYears() {
  const [academicYears, setAcademicYear] = useState([]);

  useEffect(() => {
    const getAcademicYears = async () => {
      try {
        const { data } = await axios.get(
          "https://md-themes-api.adu.uz/api/academic-years"
        );
        setAcademicYear(data.academic_years);
      } catch (error) {
        console.error(error);
      }
    };
    getAcademicYears();
  }, []);

  return (
    <div className={styles.academicYears}>
      <h3 className={styles.academicYearsTitle}>Ta'lim yilini tanlang</h3>
      <div className={styles.container}>
        {academicYears.map((item) => (
          <Link key={item.id} className={styles.academicYearsWrapper} to={`/faculties/${item.id}`}>
            <p className={styles.academicYearsName}>{item.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default AcademicYears;
