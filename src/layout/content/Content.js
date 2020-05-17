import React from "react";

import contentStyle from "./assets/Content.module.scss";

const Content = (props) => {
  return (
    <section className={contentStyle.content}>
      {props.children}
    </section>
  );
};

export default Content;