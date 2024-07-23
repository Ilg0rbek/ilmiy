import styles from "./theme.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";

function Theme() {
  const { id } = useParams();
  const [themeList, setThemeList] = useState([]);
  // filter
  const [filteredData, setFilteredData] = useState(themeList);

  const filterAll = () => {
    setFilteredData(themeList);
  };

  useEffect(() => {
    filterAll();
  }, [themeList]);

  const filterBakalavr = () => {
    const filtered = themeList.filter((item) => item.type == "bakalavr");
    setFilteredData(filtered);
  };

  const filterMagistr = () => {
    const filtered = themeList.filter((item) => item.type == "magistr");
    setFilteredData(filtered);
  };

  useEffect(() => {
    const getThemeList = async () => {
      try {
        const { data } = await axios(
          `https://ilmiyapi.adu.uz/api/graduation/${id}`
        );
        setThemeList(data);
      } catch (error) {
        console.error(error);
      }
    };
    getThemeList();
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
      <div className={styles.themeWrapper}>
        <h1 className={styles.themeTitle}>BMI VA MD MAVZULARI</h1>
        <div className={styles.filterButton}>
          <button className={styles.themeFilter} onClick={filterAll}>
            Barcha mavzular
          </button>
          <button className={styles.themeFilter} onClick={filterBakalavr}>
            Bakalavr mavzulari
          </button>
          <button className={styles.themeFilter} onClick={filterMagistr}>
            Magistr mavzulari
          </button>
        </div>
      </div>
      <div className={styles.themeTable}>
        <table className={styles.mainTable}>
          <thead>
            <tr>
              <th>№</th>
              <th>Kafedra</th>
              <th>O'qituvchi</th>
              <th>Mavzu</th>
              <th>Turi</th>
              <th>Band qilish</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.kafedra}</td>
                <td>{item.teacher}</td>
                <td>{item.theme}</td>
                <td>
                  {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                </td>
                {item.isBron === false ? (
                  <td
                    style={{ color: "green", cursor: "pointer" }}
                    onClick={openModal}
                  >
                    Ochiq
                  </td>
                ) : (
                  <td style={{ color: "red" }}>Band</td>
                )}
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
            <h1 className={styles.modalTitle}>
              Quydagi ma'lumotlarni kiriting:
            </h1>
            <input
              type="text"
              placeholder="F.I.SH kiriting"
              className={styles.modalInput}
            />
            <input
              type="number"
              placeholder="Telefon raqamingizni kiriting"
              className={styles.modalInput}
            />
            <div className={styles.modalButton}>
              <button>Tasdiqlash</button>
              <button onClick={closeModal}>Bekor qilish</button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Theme;
