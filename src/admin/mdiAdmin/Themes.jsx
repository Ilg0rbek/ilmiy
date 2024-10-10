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
    kafedra_id: kafedra_id,
    professor_id: professor_id,
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
        "https://md-themes-api.adu.uz/api/topics",
        postData
      );
      toast.success(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };

  // EDIT DATA:
  const [putData, setPutData] = useState({
    academic_year_id: academic_year_id,
    kafedra_id: kafedra_id,
    professor_id: professor_id,
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
        `https://md-themes-api.adu.uz/api/topics/edit/${selectedId}`,
        putData
      );
      console.log(response.data.message);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  // POST MODAL:
  // const [open, setOpen] = useState(false);

  // const onOpenModal = () => setOpen(true);
  // const onCloseModal = () => setOpen(false);

  // POST DATA:
  // const [postTheme, setPostTheme] = useState({
  //   academic_year_id: academic_year_id,
  //   kafedra_id: kafedra_id,
  //   professor_id: professor_id,
  //   name: "",
  // });

  // const handleChange = (e) => {
  //   setPostTheme({
  //     ...postTheme,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post(
  //       "https://md-themes-api.adu.uz/api/topics",
  //       postTheme
  //     );
  //     toast.success(response.data.message);
  //     console.log("Response:", response.data.message);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <>
      <div className={styles.adminYears} onClick={postOpenModal}>
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
                          placeholder="Mavzuni kiriting"
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
      <Modal open={postModal} onClose={postCloseModal} center>
        <form className={styles.modal} onSubmit={handlePostSubmit}>
          <h3 className={styles.modalTitle}>Quydagi ma'lumotlarni kiriting:</h3>
          <div className={styles.InputField}>
            <input
              style={{ marginTop: "10px" }}
              type="text"
              name="name"
              placeholder="Mavzuni kiriting"
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

export default Themes;
