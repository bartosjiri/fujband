import React, {useReducer} from 'react'
import PropTypes from 'prop-types'
import SongsContext from './songsContext'
import songsReducer from './songsReducer'
import {
  SONGS_CURRENT,
  SONGS_CURRENT_CLEAR,
  SONGS_SEARCH,
  SONGS_SEARCH_CLEAR
} from '../types'

import {songsData} from '../../media/songs/songsData'

const SongsState = ({children}) => {
  const initialState = {
    songs: songsData,
    currentSong: {},
    matchingSongs: null
  }

  const [state, dispatch] = useReducer(songsReducer, initialState)

  const setCurrentSong = (id) => {
    dispatch({type: SONGS_CURRENT, payload: id})
  }

  const clearCurrentSong = () => {
    dispatch({type: SONGS_CURRENT_CLEAR})
  }

  const searchSongs = (text) => {
    dispatch({type: SONGS_SEARCH, payload: text})
  }

  const clearSearchSongs = () => {
    dispatch({type: SONGS_SEARCH_CLEAR})
  }

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
      {children}
    </SongsContext.Provider>
  )
}

SongsState.propTypes = {
  children: PropTypes.node.isRequired
}

export default SongsState
