import React from "react";
import Header from "./Header";
import FeaturedArticles from "./FeaturedArticles";
import FeaturedTutorials from "./FeaturedTutorials";

const HomePage = () => {
  return (
    <div>
      <Header />
      <FeaturedArticles />
      <FeaturedTutorials />
    </div>
  );
};

export default HomePage;