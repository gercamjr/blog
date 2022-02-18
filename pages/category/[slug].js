import Seo from "../../components/seo";
import Layout from "../../components/layout";
import Articles from "../../components/articles";
import Banner from "../../components/banner";
import { fetchAPI } from "../../lib/api";

const Category = ({ category, categories, assets }) => {
  const seo = {
    metaTitle: category.attributes.name,
    metaDescription: `All ${category.attributes.name} articles`,
  };

  return (
    <Layout categories={categories.data}>
      <Seo seo={seo} />
      <div className="uk-section">
        <div className="uk-container uk-container-large">
        <Banner logo={assets} />
          {/* <h1>{category.attributes.name}</h1> */}
          <Articles articles={category.attributes.articles.data} />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const categoriesRes = await fetchAPI("/categories", { fields: ["slug"] });

  return {
    paths: categoriesRes.data.map((category) => ({
      params: {
        slug: category.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const matchingCategories = await fetchAPI("/categories", {
    filters: { slug: params.slug },
    populate: {
      articles: {
        populate: "*",
      },
    },
  });
  const allCategories = await fetchAPI("/categories");
  const assetsRes = await fetchAPI("/assets", {populate: "*" });

  return {
    props: {
      category: matchingCategories.data[0],
      categories: allCategories,
      assets: assetsRes.data,
    },
    revalidate: 1,
  };
}

export default Category;