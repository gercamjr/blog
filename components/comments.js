import { DiscussionEmbed } from "disqus-react";
import React from "react";

export default function Comments({ article }) {
  const disqusShortname = "no-hay-pedo-blog";
  const disqusConfig = {
    url: `${process.env.NEXT_PUBLIC_URL}/article/${article.attributes.slug}`,
    identifier: article.attributes.id, // Single post id
    title: article.attributes.title, // Single post title
  };
  return (
    <div>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
}
