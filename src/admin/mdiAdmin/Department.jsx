import styles from "./mdi.module.css";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { BiShow } from "react-icons/bi";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Department() {
  const { academic_year_id, faculty_id } = useParams();

  // GET DATA:
  const [department, setDepartment] = useState([]);

  useEffect(() => {
    const getAcademicYears = async () => {
      try {
        const { data } = await axios.get(
          `https://md-themes-api.adu.uz/api/kafedralar?faculty_id=${faculty_id}`
        );
        setDepartment(data.kafedralar);
      } catch (error) {
        console.error(error);
      }
    };
    getAcademicYears();
  }, []);

  // POST MODAL:
  const [postModal, setPostModal] = useState(false);

  const postOpenModal = () => setPostModal(true);

  const postCloseModal = () => {
    setPostModal(false);
  };

  // EDIT MODAL:
  const [putModal, setPutModal] = useState(false);

  const putOpenModal = () => {
    setPutModal(true);
  };

  const putCloseModal = () => {
    setPutModal(false);
    window.location.reload();
  };

  // POST DATA:
  const [postData, setPostData] = useState({
    academic_year_id: academic_year_id,
    faculty_id: faculty_id,
    name: "",
  });

  const handlePostChange = (e) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePostSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://md-themes-api.adu.uz/api/kafedralar",
        postData
      );
      toast.success(response.data.message);
      setTimeout(() => {
        window.location.reload();
      }, [2000]);
    } catch (error) {
      console.error(error);
    }
  };

  // EDIT DATA:
  const [putData, setPutData] = useState({
    academic_year_id: academic_year_id,
    faculty_id: faculty_id,
    name: "",
    active: false,
  });

  const [selectedId, setSelectedId] = useState(null);

  const handlePutClick = (id) => {
    setSelectedId(id);
  };

  const handlePutChange = (e) => {
    setPutData({
      ...putData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePutSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `https://md-themes-api.adu.uz/api/kafedralar/edit/${selectedId}`,
        putData
      );
      console.log(response.data.message);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className={styles.adminYears} onClick={postOpenModal}>
        Kafedra yaratish{" "}
        <span style={{ marginLeft: "85%" }}>
          <FaPlus />
        </span>
      </div>
      <div className={styles.adminTableWrapper}>
        <table className={styles.adminYearsTable}>
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Kafedra</th>
              <th scope="col">Tahrirlash</th>
              <th scope="col">Qo'shish</th>
            </tr>
          </thead>
          <tbody>
            {department.map((item) => (
              <tr key={item.id}>
                <td data-label="Id">{item.id}</td>
                <td data-label="Kafedra">{item.name}</td>
                <td data-label="Tahrirlash" onClick={putOpenModal}>
                  <Link to="#" onClick={() => handlePutClick(item.id)}>
                    <FaEdit style={{ cursor: "pointer", fontSize: "20px" }} />
                  </Link>
                  <Modal open={putModal} onClose={putCloseModal} center>
                    <form className={styles.modal} onSubmit={handlePutSubmit}>
                      <h3 className={styles.modalTitle}>
                        Quydagi ma'lumotlarni kiriting:
                      </h3>
                      <div className={styles.InputField}>
                        <input
                          type="text"
                          name="name"
                          placeholder="Ta'lim yilini kiriting"
                          defaultValue={putData.name}
                          onChange={handlePutChange}
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
                          onClick={putCloseModal}
                        >
                          Bekor qilish
                        </button>
                      </div>
                    </form>
                  </Modal>
                </td>
                <td data-label="Qo'shish">
                  <Link
                    to={`/admin/professors/${academic_year_id}/${faculty_id}/${item.id}`}
                  >
                    <BiShow style={{ cursor: "pointer", fontSize: "20px" }} />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal open={postModal} onClose={postCloseModal} center>
        <form className={styles.modal} onSubmit={handlePostSubmit}>
          <h3 className={styles.modalTitle}>Quydagi ma'lumotlarni kiriting:</h3>
          <div className={styles.InputField}>
            <input
              type="text"
              name="name"
              placeholder="Kafedra kiriting"
              defaultValue={postData.name}
              onChange={handlePostChange}
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
              type="button"
              style={{ background: "red", color: "#fff" }}
              onClick={postCloseModal}
            >
              Bekor qilish
            </button>
          </div>
        </form>
      </Modal>
      <ToastContainer />
    </>
  );
}

export default Department;
