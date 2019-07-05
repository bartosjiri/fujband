import {
    SONGS_CURRENT,
    SONGS_CURRENT_CLEAR,
    SONGS_SEARCH,
    SONGS_SEARCH_CLEAR
} from "../types";

export default (state, action) => {
    switch (action.type) {
        case SONGS_CURRENT:
            return {
                ...state,
                currentSong: state.songs.find(
                    song => song.slug === action.payload
                )
            };
        case SONGS_CURRENT_CLEAR:
            return {
                ...state,
                currentSong: {}
            };
        case SONGS_SEARCH:
            return {
                ...state,
                matchingSongs: state.songs.filter(song => {
                    const regex = new RegExp(`${action.payload}`, "gi");
                    return song.title.match(regex);
                })
            };
        case SONGS_SEARCH_CLEAR:
            return {
                ...state,
                matchingSongs: null
            };
        default:
            return state;
    }
};