import React from "react";
import Card from "./card";

const Articles = ({ articles }) => {

  const cards = articles.map((article) => 
  <Card article={article} key={`${article.attributes.slug}`} />)

  return (
    <div className="blog-slider">
      
        <div className="blog-slider__wrp swiper-wrappe">
          {cards}
        </div>
      
    </div>
  );
};

export default Articles;