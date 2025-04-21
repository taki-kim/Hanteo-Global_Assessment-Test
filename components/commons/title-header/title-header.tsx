import styles from "./title-header.module.scss";
import { getTitleString } from "@/utils/urlString";

export default function TitleHeader({
  urlParams,
}: {
  urlParams: string | undefined;
}) {
  return <h1 className={styles["wrapper"]}>{getTitleString(urlParams)}</h1>;
}
