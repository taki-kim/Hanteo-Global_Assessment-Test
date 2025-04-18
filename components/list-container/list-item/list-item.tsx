import styles from "./list-item.module.scss";

type ListItemProps = {
  chart: number;
  song: string;
  singer: string;
};

export default function ListItem({ chart, song, singer }: ListItemProps) {
  return (
    <div className={styles["wrapper"]}>
      <img className={styles["image"]} src="/image/album-image.png" />
      <div className={styles["chart-number"]}>{chart}위</div>
      <div className={styles["information"]}>
        <p>{song}</p>
        <p>{singer}</p>
      </div>
    </div>
  );
}
