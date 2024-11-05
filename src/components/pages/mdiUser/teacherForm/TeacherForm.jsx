import { useEffect, useState } from "react";
import styles from "./teacherForm.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function TeacherForm() {
  const { id } = useParams();
  const [studentFullname, setStudentFullname] = useState("");

  // CHECK STUDENT:
  useEffect(() => {
    const checkStudent = async () => {
      try {
        const { data } = await axios.get(
          `https://md-themes-api.adu.uz/api/student-list?search=${id}`
        );
        setStudentFullname(data.data.items[0].full_name);
      } catch (error) {
        console.error(error);
      }
    };
    checkStudent();
  }, [id]);

  // CONFIRM STUDENT:
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `https://md-themes-api.adu.uz/api/student-accept/${id}`
      );
      toast(data.message);
      console.log("response:", data);
    } catch (error) {
      toast(error);
      console.error(error);
    }
  };

  return (
    <div className={styles.teacher} onSubmit={handleSubmit}>
      <form className={styles.teacherForm}>
        <h3 className={styles.teacherTitle}>Tasdiqlash Oynasi</h3>
        <input type="text" value={studentFullname} readOnly />
        <br />
        <button>Tasdiqlash</button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default TeacherForm;
