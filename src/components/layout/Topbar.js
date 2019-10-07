import React, {useContext} from "react";
import {Link} from "react-router-dom";

import style from "./assets/Topbar.module.scss";

import SongsContext from "../../context/songs/songsContext";

const Topbar = (props) => {
    const songsContext = useContext(SongsContext);
    const {clearCurrentSong} = songsContext;

    return (
        <section className={style.Topbar}>
            <header className={style.Topbar_header}>
                <div className={style.Topbar_header_title}>
                    <h2>{props.title}</h2>
                </div>
                <div className={style.Topbar_header_button}>
                    {
                        props.closeLink ? (
                            <Link 
                                to={props.closeLink} exact
                                onClick={() => clearCurrentSong()}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 172 172" fill="#ffffff"><path d="M33.73372,23.59961l-10.13411,10.13411l52.26628,52.26628l-52.26628,52.26628l10.13411,10.13411l52.26628,-52.26628l52.26628,52.26628l10.13411,-10.13411l-52.26628,-52.26628l52.26628,-52.26628l-10.13411,-10.13411l-52.26628,52.26628z"></path></svg>
                            </Link>
                        ) : null
                    }
                    {
                        props.searchLink ? (
                            <Link
                                to={props.searchLink} exact
                                onClick={() => clearCurrentSong()}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 172 172" fill="#ffffff"><path d="M64.5,14.33333c-27.6214,0 -50.16667,22.54527 -50.16667,50.16667c0,27.6214 22.54527,50.16667 50.16667,50.16667c12.52732,0 23.97256,-4.67249 32.7819,-12.31771l3.05143,3.05143v9.26628l43,43l14.33333,-14.33333l-43,-43h-9.26628l-3.05143,-3.05143c7.64521,-8.80934 12.31771,-20.25458 12.31771,-32.7819c0,-27.6214 -22.54527,-50.16667 -50.16667,-50.16667zM64.5,28.66667c19.87509,0 35.83333,15.95824 35.83333,35.83333c0,19.87509 -15.95825,35.83333 -35.83333,35.83333c-19.87509,0 -35.83333,-15.95825 -35.83333,-35.83333c0,-19.87509 15.95824,-35.83333 35.83333,-35.83333z"></path></svg>
                            </Link>
                        ) : null
                    }
                </div>
            </header>
            {props.children}
        </section>
    );
};

export default Topbar;