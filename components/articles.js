import React from "react";
import Card from "./card";

const Articles = ({ articles }) => {
  articles.sort(function(a,b){
    return new Date(b.attributes.publishedAt) - new Date(a.attributes.publishedAt)
  })
  console.log(articles)
  const cards = articles.map((article) => 
  <Card article={article} key={`${article.attributes.slug}`} />)

  return (
    <div className="blog-slider">
      
        {articles.length > 0 ? <div className="blog-slider__wrp swiper-wrapper">{cards}</div> : <h2>No articles under this category</h2>}
        <div className="blog-slider__pagination"></div>
    </div>
  );
};

export default Articles;