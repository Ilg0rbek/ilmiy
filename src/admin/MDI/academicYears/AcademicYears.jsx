import styles from "./academicYears.module.css";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { BiShow } from "react-icons/bi";
import axios from "axios";
import { Link } from "react-router-dom";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

function AcademicYears() {
  // GET DATA:
  const [academicYears, setAcademicYears] = useState([]);

  useEffect(() => {
    const getAcademicYears = async () => {
      try {
        const { data } = await axios.get(
          "https://md-themes-api.adu.uz/api/academic-years"
        );
        setAcademicYears(data.academic_years);
      } catch (error) {
        console.error(error);
      }
    };
    getAcademicYears();
  }, []);

  // POST MODAL:
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  // POST DATA:
  const [postAcademicYears, setPostAcademicYears] = useState({
    name: "",
  });

  const handleChange = (e) => {
    setPostAcademicYears({
      ...postAcademicYears,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://md-themes-api.adu.uz/api/academic-years",
        postAcademicYears
      );
      console.log("Response:", response.data.message);
    } catch (error) {
      console.error(error);
    }
  };

  // EDIT MODAL:
  const [open2, setOpen2] = useState(false);

  const onOpenModal2 = () => {
    setOpen2(true);
  };

  const onCloseModal2 = () => {
    setOpen2(false);
    window.location.reload();
  };

  return (
    <>
      <div className={styles.adminYears} onClick={onOpenModal}>
        Ta'lim yili yaratish{" "}
        <span style={{ marginLeft: "85%" }}>
          <FaPlus />
        </span>
      </div>
      <div className={styles.adminTableWrapper}>
        <table className={styles.adminYearsTable}>
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Ta'lim yili</th>
              <th scope="col">Tahrirlash</th>
              <th scope="col">Qo'shish</th>
            </tr>
          </thead>
          <tbody>
            {academicYears.map((item) => (
              <tr key={item.id}>
                <td data-label="Id">{item.id}</td>
                <td data-label="Ta'lim yili">{item.name}</td>
                <td data-label="Qo'shish" onClick={onOpenModal2}>
                  <Link to="#">
                    <FaEdit style={{ cursor: "pointer", fontSize: "20px" }} />
                  </Link>
                  <Modal open={open2} onClose={onCloseModal2} center>
                    <form className={styles.modal}>
                      <h3 className={styles.modalTitle}>
                        Quydagi ma'lumotlarni kiriting:
                      </h3>
                      <div className={styles.InputField}>
                        <input
                          type="text"
                          name="name"
                          placeholder="Ta'lim yilini kiriting"
                          defaultValue={postAcademicYears.name}
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
                  </Modal>
                </td>
                <td data-label="Qo'shish">
                  <Link to={`/admin/faculties/${item.id}`}>
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
              type="text"
              name="name"
              placeholder="Ta'lim yilini kiriting"
              defaultValue={postAcademicYears.name}
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

export default AcademicYears;
