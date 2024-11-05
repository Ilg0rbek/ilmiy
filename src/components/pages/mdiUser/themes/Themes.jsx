import styles from "./themes.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "react-modal";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Themes() {
  // GET DATA:
  const { kafedra_id } = useParams();
  const [themelist, setThemeList] = useState([]);

  useEffect(() => {
    const getThemes = async () => {
      try {
        const { data } = await axios.get(
          `https://md-themes-api.adu.uz/api/topics?kafedra_id=${kafedra_id}`
        );

        setThemeList(data.topics);
      } catch (error) {
        console.log(error);
      }
    };
    getThemes();
  }, []);

  // POST SMS:
  const [formData, setFormData] = useState({
    hemis_id: "",
    student_fullname: "",
    student_direction: "",
    student_phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {data} = await axios.post(
        "https://md-themes-api.adu.uz/api/student-bron",
        formData
      );
      toast(data.message);
      console.log("success - ", data);
    } catch (error) {
      toast(error);
      console.error("error:", error);
    }
  };

  // MODAL:
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (item) => {
    formData.topic_id = item.id;
    formData.professor_id = item.professor_id;
    formData.professor_fullname = item.professor.fullname;
    formData.professor_phone = item.professor.phone;
    formData.link = `https://ilmiy.adu.uz/teacher-form`;
    setModalIsOpen(true);
  };

  const closeModal = () => {
    window.location.reload();
    setModalIsOpen(false);
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
            {themelist.map((item) => (
              <tr key={item.id}>
                <td data-label="Professor o'qituvchi">
                  {item.professor.fullname}
                </td>
                <td data-label="Ilmiy daraja va unvon">
                  {item.professor.position}
                </td>
                <td data-label="Mavzu">{item.name}</td>
                {item.student_id === null ? (
                  <td
                    style={{ color: "#1f3c88", cursor: "pointer" }}
                    onClick={() => openModal(item)}
                  >
                    Band qilish
                  </td>
                ) : (
                  <td>{item.student.student_fullname}</td>
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
                type="number"
                name="hemis_id"
                placeholder="Hemis id kiriting"
                defaultValue={formData.hemis_id}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.InputField}>
              <input
                type="text"
                name="student_fullname"
                placeholder="F.I.SH kiriting"
                defaultValue={formData.student_fullname}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.InputField}>
              <input
                type="text"
                name="student_direction"
                placeholder="Ta'lim yo'nalishingizni kiriting"
                defaultValue={formData.student_direction}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.InputField}>
              <input
                type="number"
                name="student_phone"
                placeholder="Telefon raqamingizni kiriting"
                defaultValue={formData.student_phone}
                onChange={handleInputChange}
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

export default Themes;
