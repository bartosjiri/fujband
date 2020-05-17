import React, {Fragment} from "react";

import style from "./assets/Songs.module.scss";

import Topbar from "../../layout/Topbar";
import Content from "../../layout/Content";

import All from "./components/All";

const Songs = () => {
  return (
    <Fragment>
      <Topbar title="Seznam skladeb" searchLink="/songs/search"></Topbar>
      <Content>
        <div
          name="songlist"
          className={style.songlist}
        >
          <All></All>
        </div>
      </Content>
    </Fragment>
  )
};

export default Songs;
