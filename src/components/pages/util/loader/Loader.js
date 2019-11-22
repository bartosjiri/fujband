import React from "react";

import style from "./assets/Loader.module.scss";

const Loader = () => {
    return (
        <div className={style.loader}>
            <div className={style.loader_object}></div>
        </div>
    );
};

export default Loader;