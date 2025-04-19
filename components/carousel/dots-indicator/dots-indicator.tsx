import { Dispatch, SetStateAction } from "react";
import styles from "./dots-indicator.module.scss";

type DotsIndicatorsProps = {
  slidesNumber: number;
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
};

export default function DotsIndicator({
  slidesNumber,
  currentIndex,
  setCurrentIndex,
}: DotsIndicatorsProps) {
  return (
    <div className={styles["wrapper"]}>
      {Array.from({ length: slidesNumber }).map((_, i) => (
        <div
          key={i}
          className={`${styles["dot"]} ${
            currentIndex === i + 1 ? styles["active"] : ""
          }`}
          onClick={() => {
            setCurrentIndex(i + 1);
          }}
        />
      ))}
    </div>
  );
}
