import React, {Fragment, useContext, useEffect} from "react";

import SettingsContext from "../../context/settings/settingsContext";
import SongsContext from "../../context/songs/songsContext";

import Topbar from "../../layout/topbar/Topbar";
import Content from "../../layout/content/Content";

import songStyle from "./assets/Song.module.scss";

import NotFound from "../not-found/NotFound";

const Song = ({match}) => {
  const settingsContext = useContext(SettingsContext);
  const {fontSize, fontLine, fontAlign} = settingsContext;

  const songsContext = useContext(SongsContext);
  const {currentSong, setCurrentSong} = songsContext;

  useEffect(() => {
    setCurrentSong(match.params.slug);
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {currentSong
        ? (
          <Fragment>
            <Topbar title={currentSong.title} closeLink="/songs"></Topbar>
            <Content>
              <div
                name="lyrics"
                className={songStyle.song}
                style={{
                  fontSize,
                  lineHeight: fontLine,
                  textAlign: fontAlign
                }}
              >
                {/* Preferably find other way to provide song lyrics bellow */}
                <div dangerouslySetInnerHTML={{__html: currentSong.text}}></div>
              </div>
            </Content>
          </Fragment >
        ) : (
          <NotFound></NotFound>
        )
      }
    </Fragment>
  );
};

export default Song;