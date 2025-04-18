import styles from "./card.module.scss";
import Image from "next/image";

type CardProps = {
  image: string;
};

export default function Card({ image }: CardProps) {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["inner-wrapper"]}>
        <div className={styles["image-container"]}>
          <Image src={image} alt="d" fill draggable={false} />
        </div>
        <p>ddd</p>
        <p>ddd</p>
      </div>
    </div>
  );
}
