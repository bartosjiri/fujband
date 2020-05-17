import React, {Fragment, useContext} from "react";
import {Link} from "react-router-dom";

import SongsContext from "../../context/songs/songsContext";

import songsStyle from "./assets/Songs.module.scss";

import Topbar from "../../layout/topbar/Topbar";
import Content from "../../layout/content/Content";

const Songs = () => {
  const songsContext = useContext(SongsContext);
  const {songs} = songsContext;

  return (
    <Fragment>
      <Topbar title="Seznam skladeb" searchLink="/songs/search"></Topbar>
      <Content>
        <div
          name="songlist"
          className={songsStyle.songs}
        >
          <ul className={songsStyle.songs_list}>
            {songs && songs
              .sort((a, b) => a.title.localeCompare(b.title, "cs"))
              .map(song => (
                <li key={song.id} className={songsStyle.songs_list_item}>
                  <Link to={`/songs/${song.slug}`}>{song.title}</Link>
                </li>
              ))
            }
          </ul>
        </div>
      </Content>
    </Fragment>
  )
};

export default Songs;
