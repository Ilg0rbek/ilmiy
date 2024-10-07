// import { Link, useParams } from "react-router-dom";
// import styles from "./faculty.module.css";
// import { useEffect, useState } from "react";
// import axios from "axios";

// function Faculty() {
//   const { date } = useParams();
//   const [faculty, setFaculty] = useState([]);

//   useEffect(() => {
//     const getFaculty = async () => {
//       try {
//         const { data } = await axios(
//           `https://ilmiyapi.adu.uz/api/faculty-graduation/faculty?date=${date}`
//         );
//         setFaculty(data);
//         console.log("data - ", data);
        
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     getFaculty();
//   }, []);

//   return (
//     <div className={styles.faculty}>
//       <div className={styles.facultyHeader}>
//         <h3 className={styles.facultyTitle}>Fakultetingizni tanlang</h3>
//       </div>
//       <div className={styles.container}>
//         {
//           faculty?.map(item => (
//             <Link key={item?._id} to={`/department/${item?.name}`} className={styles.facultyWrapper}>
//               <p className={styles.facultyName}>{item?.name}</p>
//             </Link>
//           ))
//         }
//       </div>
//     </div>
//   );
// }

// export default Faculty;
