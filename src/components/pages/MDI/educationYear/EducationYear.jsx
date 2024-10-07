// import { Link } from "react-router-dom";
// import styles from "./educationYear.module.css";
// import { useState, useEffect } from "react";
// import axios from "axios";

// function EducationYear() {
//   const [educationYear, setEducationYear] = useState([]);

//   useEffect(() => {
//     const getEducationYear = async () => {
//       try {
//         const { data } = await axios.get(
//           "https://ilmiyapi.adu.uz/api/faculty-graduation"
//         );
//         console.log("response - ", data);
//         setEducationYear(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     getEducationYear();
//   }, []);

//   return (
//     <div className={styles.educationYear}>
//       <h3 className={styles.educationYearTitle}>Ta'lim yilini tanlang</h3>
//       <div className={styles.container}>
//         <Link
//           to={`/faculty/${educationYear[0]?.date}`}
//           className={styles.educationYearWrapper}
//         >
//           <p className={styles.educationYearName}>{educationYear[0]?.date}</p>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default EducationYear;
