import React, {useReducer} from "react";
import SongsContext from "./songsContext";
import songsReducer from "./songsReducer";
import {
    SONGS_CURRENT,
    SONGS_CURRENT_CLEAR,
    SONGS_SEARCH,
    SONGS_SEARCH_CLEAR
} from "../types";


import songsData from "./../../media/songs/songsData";

const SongsState = (props) => {
    const initialState = {
        songs: songsData,
        currentSong: {},
        matchingSongs: null
    };

    const [state, dispatch] = useReducer(songsReducer, initialState);

    // Set current song
    const setCurrentSong = (id) => {
        dispatch({type: SONGS_CURRENT, payload: id});
    };

    // Clear current song
    const clearCurrentSong = () => {
        dispatch({type: SONGS_CURRENT_CLEAR});
    };

    // Search songs
    const searchSongs = (text) => {
        dispatch({type: SONGS_SEARCH, payload: text});
    };

    // Clear songs search
    const clearSearchSongs = () => {
        dispatch({type: SONGS_SEARCH_CLEAR});
    };
  
    return (
        <SongsContext.Provider
            value={{
                songs: state.songs,
                currentSong: state.currentSong,
                setCurrentSong,
                clearCurrentSong,
                matchingSongs: state.matchingSongs,
                searchSongs,
                clearSearchSongs
            }}
        >
            {props.children}
        </SongsContext.Provider>
    );
};

export default SongsState;
