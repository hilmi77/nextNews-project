import NewsList from "@/components/news-list";
import { getNewsForYear } from "@/lib/news";

const FilteredNewsPage = ({ params }) => {
  const yearSlug = params.yearSlug;
  const news = getNewsForYear(yearSlug);

  return <NewsList news={news} />;
};

export default FilteredNewsPage;
