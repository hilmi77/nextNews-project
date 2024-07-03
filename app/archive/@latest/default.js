import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";
import React from "react";

const LatestNewsPage = async () => {
  const latestNews = await getLatestNews();
  return (
    <main>
      <h1>Latest News Page</h1>
      <NewsList news={latestNews} />
    </main>
  );
};

export default LatestNewsPage;
