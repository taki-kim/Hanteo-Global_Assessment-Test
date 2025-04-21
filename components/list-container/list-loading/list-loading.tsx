import { PuffLoader } from "react-spinners";

import styles from "./list-loading.module.scss";

export default function ListLoading() {
  return (
    <div className={styles["wrapper"]}>
      <PuffLoader color="var(--color-pink-02)" aria-label="Loading Spinner" />
    </div>
  );
}
