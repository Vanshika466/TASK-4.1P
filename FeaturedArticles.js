import React from "react";

const FeaturedArticles = () => {
  const articles = [
    {
      title: "React or Vue",
      description: "Which one to choose?",
      author: "John Doe",
      image: "https://picsum.photos/300/200?random=1",
      rating: 5,
    },
    {
      title: "NodeJS Basics",
      description: "Getting started with NodeJS",
      author: "Jane Smith",
      image: "https://picsum.photos/300/200?random=2",
      rating: 4.8,
    },
    {
      title: "React Hooks",
      description: "Mastering React Hooks",
      author: "Michael Brown",
      image: "https://picsum.photos/300/200?random=3",
      rating: 4.7,
    },
  ];

  return (
    <section style={{ textAlign: "center" }}>
      <h2>Featured Articles</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        {articles.map((article, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "5px",
              width: "250px",
            }}
          >
            <img
              src={article.image}
              alt={article.title}
              style={{ width: "100%", height: "auto", borderRadius: "5px" }}
            />
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <p>⭐ {article.rating}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedArticles;
