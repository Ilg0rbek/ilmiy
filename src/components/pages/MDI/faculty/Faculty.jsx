import styles from "./faculty.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Faculty() {
  // const [facultyList, setfacultyList] = useState([]);

  // useEffect(() => {
  //   const getFacultyList = async () => {
  //     try {
  //       const { data } = await axios.get(
  //         "https://ilmiyapi.adu.uz/api/faculty-graduation"
  //       );
  //       setfacultyList(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   getFacultyList();
  // }, []);

  const [selectedId, setSelectedId] = useState("");
  const [facultyList, setFacultyList] = useState([]);

  useEffect(() => {
    if (selectedId) {
      axios
        .get(`https://ilmiyapi.adu.uz/api/faculty-graduation/${selectedId}`)
        .then((response) => {
          setFacultyList(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [selectedId]);

  console.log("faculties - ", facultyList);

  const handleSelectionChange = (event) => {
    setSelectedId(event.target.value);
  };

  return (
    <div className={styles.faculty}>
      <div className={styles.facultyHeader}>
        <h3 className={styles.facultyTitle}>
          {selectedId ? "Fakultetingizni tanlang | " : "Fakultetlar | "}{" "}
        </h3>
        <select
          className={styles.facultyYear}
          value={selectedId}
          onChange={handleSelectionChange}
        >
          <option value="">Fakultet yilini tanlang</option>
          <option value="66a719fc8fa331efcc282c0e">2024-2026</option>
        </select>
      </div>
      <div className={styles.container}>
        {selectedId ? (
          <Link
            to={`/faculty/${facultyList._id}`}
            className={styles.facultyWrapper}
            key={facultyList._id}
          >
            <p className={styles.facultyName}>{facultyList.name}</p>
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Faculty;
