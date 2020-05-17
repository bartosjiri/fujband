import React from "react";

import loaderStyle from "./assets/Loader.module.scss";

const Loader = () => {
  return (
    <div className={loaderStyle.loader}>
      <div className={loaderStyle.animation}></div>
    </div>
  );
};

export default Loader;