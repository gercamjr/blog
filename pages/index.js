import React from "react";
import Articles from "../components/articles";
import Layout from "../components/layout";
import Banner from "../components/banner";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";


const Home = ({ articles, categories, homepage, assets }) => {
  
  return (
    <Layout categories={categories}>
      <Seo seo={homepage.attributes.seo} />
      <div className="uk-section">
        <div className="uk-container uk-container-large">
        <Banner logo={assets} />
          <Articles articles={articles} />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes, categoriesRes, homepageRes, assetsRes] = await Promise.all([
    fetchAPI("/articles", { populate: ["image", "category"] }),
    fetchAPI("/categories", { populate: "*" }),
    fetchAPI("/homepage", {
      populate: {
        hero: "*",
        seo: { populate: "*" },
      },
    }),
    fetchAPI("/assets", {populate: "*" }),
    
  ]);

  return {
    props: {
      articles: articlesRes.data,
      categories: categoriesRes.data,
      homepage: homepageRes.data,
      assets: assetsRes.data,
    },
    revalidate: 1,
  };
}

export default Home;