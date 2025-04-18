import styles from "./page.module.scss";
import Carousel from "@/components/carousel/carousel";
import ListContainer from "@/components/list-container/list-container";

export default function Home() {
  return (
    <div className={styles["wrapper"]}>
      <Carousel />
      <ListContainer />
    </div>
  );
}
