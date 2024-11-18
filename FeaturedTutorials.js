import React from "react";

const FeaturedTutorials = () => {
  const tutorials = [
    {
      name: "JSDoc",
      description: "e.g., JSDoc",
      image: "https://picsum.photos/300/200?random=4",
      rating: 5,
    },
    {
      name: "React Router",
      description: "e.g., React Router",
      image: "https://picsum.photos/300/200?random=5",
      rating: 4.5,
    },
    {
      name: "Express",
      description: "e.g., Express",
      image: "https://picsum.photos/300/200?random=6",
      rating: 4.9,
    },
  ];

  return (
    <section style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Featured Tutorials</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        {tutorials.map((tutorial, index) => (
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
              src={tutorial.image}
              alt={tutorial.name}
              style={{ width: "100%", height: "auto", borderRadius: "5px" }}
            />
            <h3>{tutorial.name}</h3>
            <p>⭐ {tutorial.rating}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedTutorials;
