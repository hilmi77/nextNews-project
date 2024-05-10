import { DUMMY_NEWS } from "@/dummy-news";
import React from "react";

const ImagePage = ({ params }) => {
  const newsItemSlug = params.newSlug;
  const newsItem = DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === newsItemSlug
  );

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
};

export default ImagePage;
