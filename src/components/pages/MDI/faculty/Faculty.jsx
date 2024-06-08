import styles from "./faculty.module.css";
import { Link } from "react-router-dom";

function Faculty() {
  return (
    <div className={styles.faculty}>
      <h3 className={styles.facultyTitle}>Fakultetingizni tanlang</h3>
      <div className={styles.container}>
        <Link to="#" className={styles.facultyWrapper}>
          <p className={styles.facultyName}>Axborot texnologiyalari va kompyuter injiniringi fakulteti</p>
        </Link>
        <Link to="#" className={styles.facultyWrapper}>
          <p className={styles.facultyName}>Filologiya fakulteti</p>
        </Link>
        <Link to="#" className={styles.facultyWrapper}>
          <p className={styles.facultyName}>Tabiiy fanlar fakulteti</p>
        </Link>
        <Link to="#" className={styles.facultyWrapper}>
          <p className={styles.facultyName}>Tarix fakulteti</p>
        </Link>
        <Link to="#" className={styles.facultyWrapper}>
          <p className={styles.facultyName}>Ijtimoiy-iqtisodiyot fakulteti</p>
        </Link>
        <Link to="#" className={styles.facultyWrapper}>
          <p className={styles.facultyName}>Jismoniy madaniyat fakulteti</p>
        </Link>
        <Link to="#" className={styles.facultyWrapper}>
          <p className={styles.facultyName}>Pedagogika va san’atshunoslik fakulteti</p>
        </Link>
        <Link to="#" className={styles.facultyWrapper}>
          <p className={styles.facultyName}>Fizika fakulteti</p>
        </Link>
        <Link to="#" className={styles.facultyWrapper}>
          <p className={styles.facultyName}>Matematika fakulteti</p>
        </Link>
        <Link to="#" className={styles.facultyWrapper}>
          <p className={styles.facultyName}>Sirtqi bo'lim</p>
        </Link>
        <Link to="#" className={styles.facultyWrapper}>
          <p className={styles.facultyName}>Magistratura bo'limi</p>
        </Link>
      </div>
    </div>
  );
}

export default Faculty;
