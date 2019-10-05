import React, {Fragment, useContext, useRef, useEffect} from "react";
import {Link} from "react-router-dom";

import style from "./assets/Search.module.scss";

import Topbar from "../../../layout/Topbar";
import Content from "../../../layout/Content";

import SongsContext from "../../../../context/songs/songsContext";

const Search = () => {
    const songsContext = useContext(SongsContext);
    const text = useRef();
    const {searchSongs, clearSearchSongs, matchingSongs} = songsContext;

    useEffect(() => {
        clearSearchSongs();
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (matchingSongs === null) {
            text.current.value = "";
        }
    });

    const onChange = (e) => {
        if(text.current.value !== "") {
            searchSongs(e.target.value);
        } else {
            clearSearchSongs();
        }
    };

    return (
        <Fragment>
            <Topbar 
                title="Vyhledávání" 
                closeLink="/songs"
                // Odkaz zpět na podle toho odkud přicházím: Home nebo Songs
            ></Topbar>
            <Content>
                <div className={style.search_actions}>
                    <div className={style.search_actions_input}>
                        <div className={style.search_actions_input_icon}>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 172 172" fill="#ffffff"><path d="M64.5,14.33333c-27.6214,0 -50.16667,22.54527 -50.16667,50.16667c0,27.6214 22.54527,50.16667 50.16667,50.16667c12.52732,0 23.97256,-4.67249 32.7819,-12.31771l3.05143,3.05143v9.26628l43,43l14.33333,-14.33333l-43,-43h-9.26628l-3.05143,-3.05143c7.64521,-8.80934 12.31771,-20.25458 12.31771,-32.7819c0,-27.6214 -22.54527,-50.16667 -50.16667,-50.16667zM64.5,28.66667c19.87509,0 35.83333,15.95824 35.83333,35.83333c0,19.87509 -15.95825,35.83333 -35.83333,35.83333c-19.87509,0 -35.83333,-15.95825 -35.83333,-35.83333c0,-19.87509 15.95824,-35.83333 35.83333,-35.83333z"></path></svg>
                        </div>
                        <input
                            ref={text}
                            type="text"
                            placeholder="Název skladby"
                            className={style.search_actions_input_text}
                            onChange={onChange}
                        >
                        </input>
                        <div 
                            className={style.search_actions_input_clear}
                            onClick={() => clearSearchSongs()}
                            style={{opacity: matchingSongs === null ? " 0" : "1"}}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 172 172" fill="#ffffff"><path d="M43.78385,28.66667c-4.91035,0 -9.56365,2.57826 -12.16374,6.73275l-31.62012,50.60059l31.63411,50.60059c2.60009,4.15449 7.2396,6.73275 12.14974,6.73275h106.71615c7.84216,0 14.33333,-6.49117 14.33333,-14.33333v-86c0,-7.84216 -6.49117,-14.33333 -14.33333,-14.33333zM43.76986,43h0.014h106.71615v86h-106.71615l-26.889,-43zM69.56706,52.26628l-10.13411,10.13411l23.59961,23.59961l-23.59961,23.59961l10.13411,10.13411l23.59961,-23.59961l23.59961,23.59961l10.13411,-10.13411l-23.59961,-23.59961l23.59961,-23.59961l-10.13411,-10.13411l-23.59961,23.59961z"></path></svg>                        </div>
                    </div>
                </div> 
                    
                <div className={style.search_results}>
                    {/* <h4>{matchingSongs !== null ? matchingSongs.length : ""}</h4> */}

                    <ul className={style.search_results_list}>
                        {matchingSongs !== null ? matchingSongs.map(song => (
                            <li key={song.id} className={style.search_results_list_item}>
                                <Link to={`/songs/${song.slug}`}>{song.title}</Link>
                            </li>
                        )) : null}
                    </ul>
                </div> 
            </Content>   
        </Fragment>
    );
};

export default Search;


