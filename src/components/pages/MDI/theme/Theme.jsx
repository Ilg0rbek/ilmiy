import { useEffect, useState } from "react";
import styles from "./theme.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Modal from "react-modal";

function Theme() {
  const { id } = useParams();
  const [themeList, setThemeList] = useState([]);

  useEffect(() => {
    if (id) {
      axios
        .get(`https://ilmiyapi.adu.uz/api/graduation/kafedra?kafedra=${id}`)
        .then((response) => {
          console.log("response - ", response.data);
          setThemeList(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, []);

  // modal

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
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
                  onClick={openModal}
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
          <div className={styles.modal}>
            <h3 className={styles.modalTitle}>
              Quydagi ma'lumotlarni kiriting:
            </h3>
            <input
              type="text"
              placeholder="F.I.SH kiriting"
              className={styles.modalInput}
            />
            <input
              type="text"
              placeholder="Yo'nalishingizni kiriting"
              className={styles.modalInput}
            />
            <input
              type="number"
              placeholder="Telefon raqamingizni kiriting"
              className={styles.modalInput}
            />
            <div className={styles.modalButton}>
              <button style={{background: "green", color: "#fff"}}>Tasdiqlash</button>
              <button style={{background: "red", color: "#fff"}} onClick={closeModal}>Bekor qilish</button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Theme;
