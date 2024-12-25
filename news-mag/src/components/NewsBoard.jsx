import { useEffect, useState } from "react";
import NewsItems from "./NewsItems";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=0bd9280371634704b243465ef5955406`;
        const response = await fetch(url);
        const data = await response.json();
        if (data.articles) {
          setArticles(data.articles);
        } else {
          console.error("Error fetching articles:", data);
        }
      } catch (error) {
        console.error("Failed to fetch news:", error);
      }
    };

    fetchNews();
  }, [category]);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      <div className="d-flex flex-wrap justify-content-center">
        {articles.length > 0 ? (
          articles.map((news, index) => (
            <NewsItems
              key={index}
              title={news.title || "No Title"}
              description={news.description || "No Description"}
              src={news.urlToImage || "https://via.placeholder.com/360x200"}
              url={news.url}
            />
          ))
        ) : (
          <p className="text-center">No news available</p>
        )}
      </div>
    </div>
  );
};

export default NewsBoard;
