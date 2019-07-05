import React from 'react';

import style from "./assets/Content.module.scss";

const Content = (props) => {
    return (
        <section className={style.Content}>
            {props.children}
        </section>
    );
};

export default Content;