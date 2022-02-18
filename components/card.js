import React from "react";
import Link from "next/link";
import NextImage from "./image";
import PublishedDate from "./publishedDate";

const Card = ({ article }) => {
  return (
    <Link href={`/article/${article.attributes.slug}`}>
      <a className="uk-link-reset">
        <div className="blog-slider__item swiper-slide">
          <div className="blog-slider__img">
            <NextImage image={article.attributes.image} />
          </div>
          <div className="blog-slider__content">
            <span className="blog-slider__code">
              {article.attributes.category.data.attributes.name}
            </span>
            <div className="blog-slider__title">{article.attributes.title}</div>
            <div className="blog-slider__date">
              <PublishedDate date={article.attributes.published_at} />
            </div>
            <div className="blog-slider__text">
              {article.attributes.description}
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
