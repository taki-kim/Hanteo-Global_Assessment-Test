import styles from "./card.module.scss";
import Image from "next/image";
import Badge from "./badge/badge";
import LinkButton from "@/components/commons/link-button/link-button";

type CardProps = {
  imageLink: string;
  title: string;
  period?: string;
  link: string;
  status?: string;
};

export default function Card({
  imageLink,
  title,
  period,
  link,
  status,
}: CardProps) {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["inner-wrapper"]}>
        <div className={styles["image-container"]}>
          <Image src={imageLink} alt="d" fill draggable={false} />
          <Badge statusText={status} />
        </div>
        <div className={styles["info-container"]}>
          <div className={styles["info-header"]}>
            <h3 className={styles["title"]}>{title}</h3>
            <LinkButton buttonSize="medium" buttonText="바로가기" link={link} />
          </div>
          <div className={styles["info-footer"]}>
            <p>{period ? period : ""}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
