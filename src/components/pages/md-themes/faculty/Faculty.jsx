import styles from "./faculty.module.css";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Faculty() {
  const { academic_year_id } = useParams();
  const [faculty, setFaculty] = useState([]);

  console.log("academic_year_id ", academic_year_id);

  useEffect(() => {
    const getAcademicYears = async () => {
      try {
        const { data } = await axios.get(
          `https://md-themes-api.adu.uz/api/faculties?academic_year_id=${academic_year_id}`
        );
        setFaculty(data.faculties);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    getAcademicYears();
  }, []);

  return (
    <div className={styles.academicYears}>
      <h3 className={styles.academicYearsTitle}>Fakultetingizni tanlang</h3>
      <div className={styles.container}>
        {faculty.map((item) => (
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

export default Faculty;
