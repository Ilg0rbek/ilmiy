import styles from "./themes.module.css";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { BiShow } from "react-icons/bi";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

function Themes() {
  const { academic_year_id, faculty_id, kafedra_id, professor_id } =
    useParams();

  // GET DATA:
  const [theme, setTheme] = useState([]);

  useEffect(() => {
    const getThemeData = async () => {
      try {
        const { data } = await axios.get(
          `https://md-themes-api.adu.uz/api/topics?professor_id=${professor_id}`
        );
        setTheme(data.topics);
      } catch (error) {
        console.error(error);
      }
    };
    getThemeData();
  }, []);

  // POST MODAL:
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  // POST DATA:
  const [postTheme, setPostTheme] = useState({
    academic_year_id: academic_year_id,
    kafedra_id: kafedra_id,
    professor_id: professor_id,
    name: "",
  });

  const handleChange = (e) => {
    setPostTheme({
      ...postTheme,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://md-themes-api.adu.uz/api/topics",
        postTheme
      );
      console.log("Response:", response.data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className={styles.adminYears} onClick={onOpenModal}>
        Mavzu yaratish{" "}
        <span style={{ marginLeft: "85%" }}>
          <FaPlus />
        </span>
      </div>
      <div className={styles.adminTableWrapper}>
        <table className={styles.adminYearsTable}>
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Mavzu nomi</th>
              <th scope="col">Professor o'qituvchi</th>
              <th scope="col">Tahrirlash</th>
              <th scope="col">Qo'shish</th>
            </tr>
          </thead>
          <tbody>
            {theme.map((item) => (
              <tr key={item.id}>
                <td data-label="Id">{item.id}</td>
                <td data-label="Mavzu nomi">{item.name}</td>
                <td data-label="Professor o'qituvchi">
                  {item.professor.fullname}
                </td>
                <td data-label="Qo'shish">
                  <Link to="#">
                    <FaEdit style={{ cursor: "pointer", fontSize: "20px" }} />
                  </Link>
                  {/* <Modal open={open2} onClose={onCloseModal2} center>
            <form className={styles.modal}>
              <h3 className={styles.modalTitle}>
                Quydagi ma'lumotlarni kiriting:
              </h3>
              <div className={styles.InputField}>
                <input
                  type="text"
                  name="name"
                  placeholder="Ta'lim yilini kiriting"
                  defaultValue={postFaculty.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.modalButton}>
                <button
                  type="submit"
                  style={{ background: "green", color: "#fff" }}
                >
                  O'zgartirish
                </button>
                <button
                  style={{ background: "red", color: "#fff" }}
                  onClick={onCloseModal2}
                >
                  Bekor qilish
                </button>
              </div>
            </form>
          </Modal> */}
                </td>
                <td data-label="Qo'shish">
                  <Link
                    to={`/admin/themes/${academic_year_id}/${faculty_id}/${kafedra_id}/${item.id}`}
                  >
                    <BiShow style={{ cursor: "pointer", fontSize: "20px" }} />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal open={open} onClose={onCloseModal} center>
        <form className={styles.modal} onSubmit={handleSubmit}>
          <h3 className={styles.modalTitle}>Quydagi ma'lumotlarni kiriting:</h3>
          <div className={styles.InputField}>
            <input
              style={{ marginTop: "10px" }}
              type="text"
              name="name"
              placeholder="Mavzuni kiriting"
              defaultValue={postTheme.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.modalButton}>
            <button
              type="submit"
              style={{ background: "green", color: "#fff" }}
            >
              Yaratish
            </button>
            <button
              style={{ background: "red", color: "#fff" }}
              onClick={onCloseModal}
            >
              Bekor qilish
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}

export default Themes;
