import styles from "./list-containter.module.scss";
import { chartList } from "@/lib/dummy-list";
import ListItem from "./list-item/list-item";

export default function ListContainer() {
  return (
    <div className={styles["wrapper"]}>
      {chartList.map((e, i) => (
        <ListItem
          key={i + e.song}
          chart={e.chart}
          song={e.song}
          singer={e.singer}
        />
      ))}
    </div>
  );
}
