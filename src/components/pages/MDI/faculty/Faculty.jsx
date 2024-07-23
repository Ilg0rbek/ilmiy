import styles from "./faculty.module.css";
import { Link } from "react-router-dom";
import { data } from "../constants";
import { useEffect, useState } from "react";
import axios from "axios";

function Faculty() {
  const [facultyList, setfacultyList] = useState([]);

  useEffect(() => {
    const getFacultyList = async () => {
      try {
        const { data } = await axios.get(
          "https://ilmiyapi.adu.uz/api/faculty-graduation"
        );
        setfacultyList(data);
      } catch (error) {
        console.error(error);
      }
    };
    getFacultyList();
  }, []);

  return (
    <div className={styles.faculty}>
      <h3 className={styles.facultyTitle}>Fakultetingizni tanlang</h3>
      <div className={styles.container}>
        {facultyList.map((item) => (
          <Link className={styles.facultyWrapper} key={item?._id} to={`/faculty/${item?._id}`}><p className={styles.facultyName}>{item?.name}</p></Link>
        ))}
        {/* {data.map((item) => (
          <Link
            to={`/faculty/${item.id}`}
            key={item.id}
            className={styles.facultyWrapper}
          >
            <p className={styles.facultyName}>{item.facultyName}</p>
          </Link>
        ))} */}
      </div>
    </div>
  );
}

export default Faculty;
