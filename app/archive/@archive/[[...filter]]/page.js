import { getAvailableNewsYears, getNewsForYear } from "@/lib/news";
import Link from "next/link";

const FilteredNewsPage = ({ params }) => {
  const filter = params.filter;
  console.log(filter);

  const links = getAvailableNewsYears();

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link}>
              <Link href={`/archive/${link}`}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
  // const news = getNewsForYear(yearSlug);

  // return <NewsList news={news} />;
};

export default FilteredNewsPage;
