import ModalBackDrop from "@/components/modal-backdrop";
import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";
import React from "react";

const InterceptedImagePage = async ({ params }) => {
  const newsItemSlug = params.newSlug;
  const newsItem = getNewsItem(newsItemSlug);

  if (!newsItem) {
    return notFound();
  }

  return (
    <>
      <ModalBackDrop />
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
