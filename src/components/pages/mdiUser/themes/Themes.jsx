import styles from "./themes.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Themes() {
  const { academic_year_id, kafedra_id } = useParams();
  const [theme, setTheme] = useState([]);

  useEffect(() => {
    const getThemes = async () => {
      try {
        const { data } = await axios.get(
          `https://md-themes-api.adu.uz/api/topics?kafedra_id=${kafedra_id}`
        );

        setTheme(data.topics);
        console.log("response", data.topics);
      } catch (error) {
        console.log(error);
      }
    };
    getThemes();
  }, []);

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
            {theme.map((item) => (
              <tr key={item.id}>
                <td data-label="Professor o'qituvchi">
                  {item.professor.fullname}
                </td>
                <td data-label="Ilmiy daraja va unvon">
                  {item.professor.position}
                </td>
                <td data-label="Mavzu">{item.name}</td>
                {item.student_id === null ? (
                  <td>Band qilish</td>
                ) : (
                  <td>Student full name</td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Themes;
