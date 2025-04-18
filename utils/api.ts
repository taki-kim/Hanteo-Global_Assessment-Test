export async function fetchChartsListByPage({
  pageParam = 0,
}: {
  pageParam?: number;
}) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/charts/get?offset=${pageParam}`
  );
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}
