import React from "react";
import Link from "next/link";

const Nav = ({ categories }) => {
  return (
    <div>
      <nav className="uk-navbar-container" data-uk-navbar>
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li>
              <Link href="/">
                <a>No Hay Pedo Blog</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav uk-visible@s">
            {categories.map((category) => {
              return (
                <li key={category.id}>
                  <Link href={`/category/${category.attributes.slug}`}>
                    <a>{category.attributes.name}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
          <a href="#" className="uk-navbar-toggle uk-hidden@s" uk-icon="icon: menu" uk-toggle="target: #sidenav"></a>
        </div>
      </nav>
    </div>
  );
};

export default Nav;