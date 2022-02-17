import React from "react";
import Link from "next/link";

export default function Sidenav({ categories }) {
  return (
    <div id="sidenav" uk-offcanvas="flip: true" className="uk-offcanvas">
      <div className="uk-offcanvas-bar">
        <ul className="uk-nav">
        {categories.map((category) => {
              return (
                <li key={category.id}>
                  <Link href={`/category/${category.attributes.slug}`}>
                    <a className="uk-link-reset">{category.attributes.name}</a>
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
