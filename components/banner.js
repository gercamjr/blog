import React from "react";
import NextImage from "./image";

export default function Banner(props) {
  return (
    <div className="sandbox-clean-and-grimey">
      <div id="logo">
        <div className="logo__banner">
          <NextImage image={props.logo[0].attributes.images} />
        </div>
        <div className="logo__banner pedo">
          <NextImage image={props.logo[1].attributes.images} />
        </div>
      </div>
    </div>
  );
}
