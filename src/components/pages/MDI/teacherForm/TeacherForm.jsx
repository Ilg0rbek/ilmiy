import { useState } from "react";
import styles from "./teacherForm.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";



function TeacherForm() {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    id: id,
    studentName: "",
    studentNumber: ""
  });

  console.log("formData ", formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post("https://ilmiyapi.adu.uz/api/graduation/check", formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Success:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className={styles.teacher}>
      <form className={styles.teacherForm} onSubmit={handleSubmit}>
        <h3 className={styles.teacherTitle}>Tasdiqlash Formasi</h3>        
          <input name="studentName" type="text" defaultValue={formData.studentName} onChange={handleChange} placeholder="Talaba To'liq Ismi Kiriting"  />
          <input name="studentNumber" type="text" defaultValue={formData.studentNumber} onChange={handleChange} placeholder="Talaba Telefon Raqami Kiriting" />
          <br />
          <button>Tasdiqlash</button>
      </form>
    </div>
  );
}

export default TeacherForm;
