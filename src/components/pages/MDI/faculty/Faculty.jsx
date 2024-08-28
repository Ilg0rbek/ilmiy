import { Link, useParams } from "react-router-dom";
import styles from "./faculty.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Faculty() {
  const { id } = useParams();
  const [faculty, setFaculty] = useState([]);

  useEffect(() => {
    const getFaculty = async () => {
      try {
        const { data } = await axios(
          `https://ilmiyapi.adu.uz/api/faculty-graduation/${id}`
        );
        setFaculty(data);
      } catch (error) {
        console.error(error);
      }
    };

    getFaculty();
  }, []);

  return (
    <div className={styles.faculty}>
      <div className={styles.facultyHeader}>
        <h3 className={styles.facultyTitle}>Fakultetingizni tanlang</h3>
      </div>
      <div className={styles.container}>
        <Link
          to={`/department/${faculty?._id}`}
          className={styles.facultyWrapper}
        >
          <p className={styles.facultyName}>{faculty?.name}</p>
        </Link>
      </div>
    </div>
  );
}

export default Faculty;
