import useSWR from "swr";

const useArticles = () => {
  const {
    mutate: mutateArticles,
    error,
    data: articles,
  } = useSWR("api/articles");
  return { mutateArticles, articles, error };
};
export default useArticles();
