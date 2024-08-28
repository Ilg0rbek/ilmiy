import { useEffect, useState } from "react";
import styles from "./theme.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Modal from "react-modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Theme() {           
  // theme
  const { id } = useParams();
  const [themeList, setThemeList] = useState([]);

  useEffect(() => {
    if (id) {
      axios
        .get(`https://ilmiyapi.adu.uz/api/graduation/kafedra?kafedra=${id}`)
        .then((response) => {
          setThemeList(response.data);
          console.log(response.data);
        })    
        .catch((error) => { 
          console.error("Error fetching data:", error);
        });
    }
  }, []);

  // modal
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (item) => {
    formData.id = item._id;
    // formData.teacher_phone = item.phone;
    formData.teacher_phone = "+998995343767";
    formData.teacher = item.teacher;
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  // id: string;
  // teacher_phone: string;
  // student_phone: string;
  // hemis_id: number
  // teacher: string;
  // student: string;
  // yunalish: string

  // sms
  const [formData, setFormData] = useState({
    student: "",
    student_phone: "",
    yunalish: "",
    hemis_id: "",
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
      const { data } = await axios.post(
        "https://ilmiyapi.adu.uz/api/graduation/sms",
        formData
      );
      if ((data.msg = "Ok")) {
        toast("Ma'lumotlar muvaffaqiyatli yuborildi!");
      }
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className={styles.theme}>
      <h3 className={styles.themeTitle}>MD Mavzulari</h3>
      <div className={styles.themeWrapper}>
        <table className={styles.themeTable}>
          <thead>
            <tr>
              <th scope="col">Professor o'qituvchi</th>
              <th scope="col">Ilmiy daraja va unvon</th>
              <th scope="col">Mavzu</th>
              <th scope="col">Band qilish</th>
            </tr>
          </thead>
          <tbody>
            {themeList.map((item) => (
              <tr key={item._id}>
                <td data-label="Professor o'qituvchi">{item.teacher}</td>
                <td data-label="Ilmiy daraja va unvon">
                  {item.degree
                    ? item.degree
                    : "Fizika va Matematika fanlari doktori, professor"}
                </td>
                <td data-label="Mavzu">{item.theme}</td>
                {item.isBron == true ? (
                  <td>{item.studentName + " " + item.studentNumber}</td>
                ) : (
                  <td
                    data-label="Band qilish"
                    style={{ color: "#1f3c88", cursor: "pointer" }}
                    onClick={() => openModal(item)}
                  >
                    Ochiq
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
          contentLabel="Example Modal"
          style={{
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
            },
          }}
        >
          <form className={styles.modal} onSubmit={handleSubmit}>
            <h3 className={styles.modalTitle}>
              Quydagi ma'lumotlarni kiriting:
            </h3>
            <div className={styles.InputField}>
              <input
                type="text"
                name="student"
                placeholder="F.I.SH kiriting"
                defaultValue={formData.student}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.InputField}>
              <input
                type="text"
                name="yunalish"
                placeholder="Ta'lim yo'nalishingizni kiriting"
                defaultValue={formData.yunalish}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.InputField}>
              <input
                type="text"
                name="student_phone"
                placeholder="Telefon raqamingizni kiriting"
                defaultValue={formData.student_phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.InputField}>
              <input
                type="number"
                name="hemis_id"
                placeholder="Hemis id kiriting"
                defaultValue={formData.hemis_id}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.modalButton}>
              <button
                type="submit"
                style={{ background: "green", color: "#fff" }}
              >
                Tasdiqlash
              </button>
              <button
                style={{ background: "red", color: "#fff" }}
                onClick={closeModal}
              >
                Bekor qilish
              </button>
            </div>
          </form>
        </Modal>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Theme;
