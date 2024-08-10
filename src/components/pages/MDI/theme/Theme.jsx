import { useEffect, useState } from "react";
import styles from "./theme.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Modal from "react-modal";

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
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, []);

  // modal
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [selectedData, setSelectedData] = useState([]);

  const openModal = (item) => {
    // setSelectedData(item);
    formData.id = item._id
    formData.teacher = item.teacher;
    formData.teacher_phone = "+998995343767";
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  // console.log("selectedData - ", selectedData);

  // sms
  const [formData, setFormData] = useState({
    student: "",
    student_phone: "",
    // teacher: selectedData?.teacher,
    // teacher_phone: selectedData?.phone,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  console.log("formData ", formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://ilmiyapi.adu.uz/api/graduation/sms",
        formData
      );
      console.log("Success:", response);
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
                  {item.degree ? item.degree : "Unvonsiz"}
                </td>
                <td data-label="Mavzu">{item.theme}</td>
                <td
                  data-label="Band qilish"
                  style={{ color: "#1f3c88", cursor: "pointer" }}
                  onClick={() => openModal(item)}
                >
                  Ochiq
                </td>
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
            <input
              name="student"
              type="text"
              placeholder="F.I.SH kiriting"
              className={styles.modalInput}
              defaultValue={formData.student}
              onChange={handleChange}
            />
            <input
              name="student_phone"
              type="number"
              placeholder="Telefon raqamingizni kiriting"
              className={styles.modalInput}
              defaultValue={formData.student_phone}
              onChange={handleChange}
            />
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
    </div>
  );
}

export default Theme;
