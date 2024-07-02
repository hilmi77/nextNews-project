import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";

const NewsPage = async () => {
  // const response = await fetch("http://localhost:8080/news");

  // if (!response.ok) {
  //   throw new Error("Failed to fetch news");
  // }

  // const news = await response.json();

  try {
    const news = await getAllNews(); // Asenkron çağrı ve await kullanımı

    return (
      <main>
        <h1>News Page</h1>
        <NewsList news={news} />
      </main>
    );
  } catch (error) {
    console.error("Failed to fetch news", error);
    return (
      <main>
        <h1>News Page</h1>
        <p>Failed to load news.</p>
      </main>
    );
  }
};

export default NewsPage;
