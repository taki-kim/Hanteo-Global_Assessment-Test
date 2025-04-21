"use client";
import { useEffect, useRef } from "react";

import styles from "./list-containter.module.scss";
import ListItem from "./list-item/list-item";
import useInfiniteChartsQuery from "@/hooks/useInfiniteChartsquery";
import ListLoading from "./list-loading/list-loading";

export default function ListContainer() {
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteChartsQuery();

  const allPosts = data?.pages.flatMap((page) => page.data) ?? [];

  useEffect(() => {
    if (!hasNextPage || isFetchingNextPage) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        fetchNextPage();
      }
    });

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => observer.disconnect();
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isLoading) {
    return (
      <div className={styles["loading-container"]}>
        <ListLoading />
      </div>
    );
  }

  return (
    <ul className={styles["wrapper"]}>
      {allPosts.map((e, i) => (
        <ListItem
          key={i + e.song}
          chart={e.chart}
          song={e.song}
          singer={e.singer}
        />
      ))}
      {isFetchingNextPage && <ListLoading />}
      <div ref={loadMoreRef} className={styles["loadMoreRef"]} />
    </ul>
  );
}
