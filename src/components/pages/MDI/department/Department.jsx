import { useEffect, useState } from "react";
import styles from "./department.module.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Department() {
  const { id } = useParams();
  const [departmentList, setDepartmentList] = useState([]);

  useEffect(() => {
    if (id) {
      axios
        .get(`https://ilmiyapi.adu.uz/api/graduation/${id}`)
        .then((response) => {
          setDepartmentList(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, []);

  console.log("departmentList - ", departmentList);

  return (
    <div className={styles.department}>
      <h3 className={styles.departmentTitle}>Kafedrangizni tanlang</h3>
      <div className={styles.container}>
        <Link to={`/department/${departmentList}`} className={styles.departmentWrapper}>
          <p className={styles.departmentName}>{departmentList}</p>
        </Link>
      </div>
    </div>
  );
}

export default Department;
