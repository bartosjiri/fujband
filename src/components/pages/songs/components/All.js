import React, {useContext} from "react";
import {Link} from "react-router-dom";

import style from "./assets/All.module.scss";

import SongsContext from "../../../../context/songs/songsContext";

const All = () => {
  const songsContext = useContext(SongsContext);
  const {songs} = songsContext;

  return (
    <ul className={style.songs_list}>
      {songs
        .sort((a, b) => a.title.localeCompare(b.title, "cs"))
        .map(song => (
          <li key={song.id} className={style.songs_list_item}>
            <Link to={`/songs/${song.slug}`}>{song.title}</Link>
          </li>
        ))
      }
    </ul>
  );
};

export default All;