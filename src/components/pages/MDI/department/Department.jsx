import styles from "./department.module.css";
import { Link, useParams } from "react-router-dom";
import { data } from "../constants";

function Department() {
  const { id } = useParams();

  return (
    <div className={styles.department}>
      <h3 className={styles.departmentTitle}>Fakultetingizni tanlang</h3>
      <div className={styles.container}>
        {
          data.filter(item => item.id == id)[0]?.department?.map(({name}) => (
            <Link className={styles.departmentWrapper}>
              <p className={styles.departmentName}>{name}</p>
            </Link>
          ))
        }
      </div>
    </div>
  );
}

export default Department;
