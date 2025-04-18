import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchChartsListByPage } from "@/utils/api";
import { FETCH_CHARTS_LIMIT } from "@/constants";

export default function useInfiniteChartsQuery() {
  return useInfiniteQuery({
    queryKey: ["charts"],
    queryFn: ({ pageParam = 0 }) => fetchChartsListByPage({ pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const nextOffset = allPages.length * FETCH_CHARTS_LIMIT;
      return lastPage.hasMore ? nextOffset : undefined;
    },
    staleTime: 1000 * 60 * 5,
  });
}
