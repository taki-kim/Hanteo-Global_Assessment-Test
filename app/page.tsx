import styles from "./page.module.scss";
import Carousel from "@/components/carousel/carousel";
import TitleHeader from "@/components/commons/title-header/title-header";
import ListContainer from "@/components/list-container/list-container";

export default function Home() {
  return (
    <div className={styles["wrapper"]}>
      <Carousel />
      <TitleHeader urlParams="" />
      <ListContainer />
    </div>
  );
}
