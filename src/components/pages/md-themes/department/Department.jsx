import styles from "./department.module.css";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Department() {
  const { academic_year_id, faculty_id } = useParams();
  const [department, setDepartment] = useState([]);

  useEffect(() => {
    const getAcademicYears = async () => {
      try {
        const { data } = await axios.get(
          `https://md-themes-api.adu.uz/api/kafedralar?faculty_id=${faculty_id}`
        );
        setDepartment(data.kafedralar);
      } catch (error) {
        console.error(error);
      }
    };
    getAcademicYears();
  }, []);

  return (
    <div className={styles.academicYears}>
      <h3 className={styles.academicYearsTitle}>Kafedrangizni tanlang</h3>
      <div className={styles.container}>
        {department.map((item) => (
          <Link
            key={item.id}
            className={styles.academicYearsWrapper}
            to={`/departments/${academic_year_id}/${item.id}`}
          >
            <p className={styles.academicYearsName}>{item.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Department;
