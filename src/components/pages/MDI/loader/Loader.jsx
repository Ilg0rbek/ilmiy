import styles from "./loader.module.css";
import { PropagateLoader } from "react-spinners";

function Loader() {
  return (
    <div className={styles.loader}>
      <PropagateLoader color="#1F3C88" size={20} />
    </div>
  );
}

export default Loader;
