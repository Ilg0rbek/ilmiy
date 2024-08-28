import { useEffect, useState } from "react";
import styles from "./department.module.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Department() {
  const { id } = useParams();
  const [department, setDepartment] = useState([]);

  useEffect(() => {
    const getDepartment = async () => {
      try {
        const { data } = await axios.get(
          `https://ilmiyapi.adu.uz/api/graduation/${id}`
        );
        setDepartment(data);
        console.log("data - ", data);
      } catch (error) {
        console.error(error);
      }
    };

    getDepartment();
  }, []);

  return (
    <div className={styles.department}>
      <h3 className={styles.departmentTitle}>Kafedrangizni tanlang</h3>
      <div className={styles.container}>
        <Link
          to={`/theme/${department}`}
          className={styles.departmentWrapper}
        >
          <p className={styles.departmentName}>{department}</p>
        </Link>
      </div>
    </div>
  );
}

export default Department;
