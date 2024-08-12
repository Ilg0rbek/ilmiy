import { useState } from "react";
import styles from "./teacherForm.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TeacherForm() {
  // const notify = () => toast("Wow so easy!");
  // const notify1 = () => toast("Mavzu muvaffaqiyatli band qilindi!");
  // const notify2 = () => toast("Mavzu band qilib bo'lingan!");
  const { id } = useParams();

  const [formData, setFormData] = useState({
    id: id,
    studentName: "",
    studentNumber: ""
  });

  // console.log("formData ", formData);

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
      alert("sadsadas")
      toast("Mavzu muvaffaqiyatli band qilindi!");
      console.log('Success:', response.data);
    } catch (error) {
      alert("sadsadas")
      toast("Mavzu band qilib bo'lingan!");
      console.error('Error:', error);
    }
  };

  return (
    <div className={styles.teacher}>
      <form className={styles.teacherForm} onSubmit={handleSubmit}>
        <h3 className={styles.teacherTitle}>Tasdiqlash Formasi</h3>        
          <input name="studentName" type="text" defaultValue={formData.studentName} onChange={handleChange} placeholder="Talaba To'liq Ismi Kiriting" required />
          <ToastContainer />  
          <input name="studentNumber" type="text" defaultValue={formData.studentNumber} onChange={handleChange} placeholder="Talaba Telefon Raqami Kiriting" required />
          <br />
          <button>Tasdiqlash</button>
      </form>
    </div>
  );
}

export default TeacherForm;
