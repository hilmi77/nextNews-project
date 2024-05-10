import { DUMMY_NEWS } from "@/dummy-news";
import React from "react";

const InterceptedImagePage = ({ params }) => {
  const newsItemSlug = params.newSlug;
  const newsItem = DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === newsItemSlug
  );

  return (
    <>
      <div className="modal-backdrop" />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
            style={{ width: "100%" }}
          />
        </div>
      </dialog>
    </>
  );
};

export default InterceptedImagePage;