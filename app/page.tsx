import styles from "./page.module.scss";
import Carousel from "@/components/carousel/carousel";

export default function Home() {
  return (
    <div className={styles["wrapper"]}>
      <Carousel />
    </div>
  );
}
