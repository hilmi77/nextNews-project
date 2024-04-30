import { DUMMY_NEWS } from "@/dummy-news";
import React from "react";

const DetailNewsPage = ({ params }) => {
  const newsSlug = params.newSlug;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);

  return (
    <article className="news-article">
      <header>
        <img
          src={`/images/news/${newsItem.image}`}
          alt={newsItem.title}
          // width="300"
          // height="300"
        />
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
};

export default DetailNewsPage;
