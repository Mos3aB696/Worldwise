import PageNav from "../components/PageNav";
import styles from "./styles/PageNotFound.module.css";
export default function PageNotFound() {
  return (
    <div className={`${styles.pageNotFound} global`}>
      <PageNav />
      <div className={styles.message}>
        <h1>404: Not Found 🤕</h1>
      </div>
    </div>
  );
}
