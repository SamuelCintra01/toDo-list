import styles from "./task.module.css";
import { TbTrash } from "react-icons/tb";

export function Task() {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer}>
        <div />
      </button>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
        laboriosam nostrum saepe nihil delectus et eius, obcaecati ipsa
        veritatis alias porro, culpa tempore iusto corporis? Ut cum vel illum
        placeat?
      </p>
      <button className={styles.deleteButton}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
