import styles from "./faculty.module.css";
import { Link } from "react-router-dom";
import { data } from "../constants";

function Faculty() {
  return (
    <div className={styles.faculty}>
      <h3 className={styles.facultyTitle}>Fakultetingizni tanlang</h3>
      <div className={styles.container}>
        {
          data.map(item => (
            <Link to={`/faculty/${item.id}`} key={item.id} className={styles.facultyWrapper}>
              <p className={styles.facultyName}>{item.facultyName}</p>
            </Link>
          ))
        }
      </div>
    </div>
  );
}

export default Faculty;
