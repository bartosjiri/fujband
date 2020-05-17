import React, {Fragment, useContext} from "react";

import Topbar from "../../layout/topbar/Topbar";
import Content from "../../layout/content/Content";

import style from "./assets/About.module.scss";

import SongsContext from "../../context/songs/songsContext";

const About = () => {
  const songsContext = useContext(SongsContext);
  const {songs} = songsContext;

  return (
    <Fragment>
      <Topbar title="O aplikaci"></Topbar>
      <Content>
        <div className={style.fujband}>
          <h2 className={style.about_subtitle}>FUJBand</h2>
          <p>FUJBand&nbsp;je hudební těleso složené původně z&nbsp;řad instrumentalistů a&nbsp;pěvců hrajících kromě lidových písní také ultimate frisbee v&nbsp;pražském týmu FUJ. Tento&nbsp;kolektiv se daří neustále rozšírovat a&nbsp;díky sérii pop-up vystoupení si tak získává pozornost posluchačů i&nbsp;z&nbsp;dalších sociálních kruhů. Právě&nbsp;pro&nbsp;jejich snažší zapojení při&nbsp;veřejných akcích je připraven tento&nbsp;zpěvník, který&nbsp;si každý může otevřít a&nbsp;stát se tak součástí FUJBand.</p>
        </div>

        <div className={style.group}>
          <h2 className={style.about_subtitle}>Novinky a vystoupení</h2>
          <a className={style.group_card} href="https://www.facebook.com/groups/155393241722548/" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 172 172" fill="#ffffff"><path d="M125.59583,64.5h-25.2625v-14.33333c0,-7.396 0.602,-12.05433 11.2015,-12.05433h13.38733v-22.79c-6.5145,-0.67367 -13.06483,-1.00333 -19.62233,-0.989c-19.44317,0 -33.63317,11.87517 -33.63317,33.67617v16.4905h-21.5v28.66667l21.5,-0.00717v64.50717h28.66667v-64.5215l21.973,-0.00717z"></path></svg>
            <h4>Muzikovat Tu & Tam</h4>
            <p>Tu&nbsp;a&nbsp;tam si jdeme zamuzikovat, zahrát a&nbsp;zazpívat, do&nbsp;parku, na&nbsp;náměstí, do&nbsp;hospody.</p>
          </a>
        </div>

        <div className={style.stats}>
          <h2 className={style.about_subtitle}>Statistika</h2>
          <div className={style.stats_card}>
            <div className={style.stats_card_item}>
              <span>{songs.length}</span>
              <p>Počet skladeb</p>
            </div>
            {/* <div className={style.stats_card_item}>
                            <span>?</span>
                            <p>Uživatelé celkem</p>
                        </div>
                        <div className={style.stats_card_item}>
                            <span>?</span>
                            <p>Uživatelé online</p>
                        </div> */}
          </div>
        </div>

        <div className={style.updates}>
          <h2 className={style.about_subtitle}>Poslední aktualizace</h2>
          <div className={style.updates_card}>
            <div className={style.updates_card_item}>
              <span>10.7.2019</span>
              <p>Skladby</p>
            </div>
            <div className={style.updates_card_item}>
              <span>22.11.2019</span>
              <p>Aplikace</p>
            </div>
          </div>
        </div>

        <div className={style.open}>
          <h2 className={style.about_subtitle}>Vývoj</h2>
          <a className={style.open_card} href="https://github.com/bartosjiri/fujband" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 172 172" fill="#ffffff"><path d="M78.11667,15.05c-32.96667,3.58333 -59.48333,30.1 -63.06667,62.35c-3.58333,33.68333 15.76667,63.78333 45.15,75.25c2.15,0.71667 4.3,-0.71667 4.3,-3.58333v-11.46667c0,0 -2.86667,0.71667 -6.45,0.71667c-10.03333,0 -14.33333,-8.6 -15.05,-13.61667c-0.71667,-2.86667 -2.15,-5.01667 -4.3,-7.16667c-2.15,-0.71667 -2.86667,-0.71667 -2.86667,-1.43333c0,-1.43333 2.15,-1.43333 2.86667,-1.43333c4.3,0 7.88333,5.01667 9.31667,7.16667c3.58333,5.73333 7.88333,7.16667 10.03333,7.16667c2.86667,0 5.01667,-0.71667 6.45,-1.43333c0.71667,-5.01667 2.86667,-10.03333 7.16667,-12.9c-16.48333,-3.58333 -28.66667,-12.9 -28.66667,-28.66667c0,-7.88333 3.58333,-15.76667 8.6,-21.5c-0.71667,-1.43333 -1.43333,-5.01667 -1.43333,-10.03333c0,-2.86667 0,-7.16667 2.15,-11.46667c0,0 10.03333,0 20.06667,9.31667c3.58333,-1.43333 8.6,-2.15 13.61667,-2.15c5.01667,0 10.03333,0.71667 14.33333,2.15c9.31667,-9.31667 20.06667,-9.31667 20.06667,-9.31667c1.43333,4.3 1.43333,8.6 1.43333,11.46667c0,5.73333 -0.71667,8.6 -1.43333,10.03333c5.01667,5.73333 8.6,12.9 8.6,21.5c0,15.76667 -12.18333,25.08333 -28.66667,28.66667c4.3,3.58333 7.16667,10.03333 7.16667,16.48333v18.63333c0,2.15 2.15,4.3 5.01667,3.58333c26.51667,-10.75 45.15,-36.55 45.15,-66.65c0,-43 -36.55,-76.68333 -79.55,-71.66667z"></path></svg>
            <h4>FUJBand Zpěvník on Github</h4>
            <p>Aplikace zpěvníku je open-source a&nbsp;na&nbsp;jejím vývoji či&nbsp;opravách se proto může podílet kdokoliv.</p>
          </a>
        </div>
      </Content>
    </Fragment>
  )
};

export default About;
