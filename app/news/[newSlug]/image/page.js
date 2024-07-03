import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";

const ImagePage = async ({ params }) => {
  const newsItemSlug = params.newSlug;
  const newsItem = await getNewsItem(newsItemSlug);

  if (!newsItem) {
    return notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
};

export default ImagePage;
