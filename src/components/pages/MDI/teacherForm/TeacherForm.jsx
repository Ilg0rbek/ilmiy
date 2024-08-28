import { useEffect, useState } from "react";
import styles from "./teacherForm.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function TeacherForm() {
  const { teacherId, id } = useParams();
  const [studentName, setStudentName] = useState("");

  const [formData, setFormData] = useState({
    student_id: id,
    teacher_id: teacherId,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://ilmiyapi.adu.uz/api/graduation/check",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast("Mavzu muvaffaqiyatli band qilindi!");
      console.log("Success:", response);
    } catch (error) {
      toast("Mavzu band qilib bo'lingan!");
      console.error("Error:", error);
    }
  };

  // get student data
  useEffect(() => {
    const postData = async () => {
      try {
        const { data } = await axios.post(
          "https://ilmiyapi.adu.uz/api/graduation/student",
          { id }
        );
        setStudentName(data.name)
      } catch (error) {
        console.error(error);
      }
    };
    postData();
  }, []);

  return (
    <div className={styles.teacher}>
      <form className={styles.teacherForm} onSubmit={handleSubmit}>
        <h3 className={styles.teacherTitle}>Tasdiqlash Oynasi</h3>
        <input
          name="studentName"
          type="text"
          value={studentName}
          onChange={handleChange}
          placeholder="Talaba To'liq Ismi Kiriting"
          readOnly
        />
        <br />
        <button>Tasdiqlash</button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default TeacherForm;
