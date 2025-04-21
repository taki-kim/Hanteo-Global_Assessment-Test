import styles from "./page.module.scss";
import TitleHeader from "@/components/commons/title-header/title-header";
import ListContainer from "@/components/list-container/list-container";
import { getTitleString } from "@/utils/urlString";

export default async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <div className={styles["wrapper"]}>
      <TitleHeader urlParams={slug} />
      <p className={styles["notice"]}>
        현재 <strong>{getTitleString(slug)}</strong> 페이지가 개설되지
        않았습니다. 임의 컨텐츠는 실시간 차트로 대체됩니다.
      </p>
      <ListContainer />
    </div>
  );
}
