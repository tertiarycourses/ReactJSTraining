import axios from 'axios';

const ROOT_URL = `http://api.tvmaze.com/search/`;

export const FETCH_SHOW_BY_QUERY = 'FETCH_SHOW_BY_QUERY';

export const REQUEST_SHOWS = 'REQUEST_SHOWS'
function requestShows(query) {
  return {
    type: REQUEST_SHOWS,
    query
  }
}

export const RECEIVE_SHOWS = 'RECEIVE_SHOWS'
function receiveShows(query, shows) {
  return {
    type: RECEIVE_SHOWS,
    query,
    payload: shows
  }
}

export function fetchShowsByQuery(query) {

  return function (dispatch) {

    dispatch(requestShows(query))

    return axios.get(`${ROOT_URL}shows?q=${query}`)
      .then(
        response => dispatch(receiveShows(query, response)),
        error => console.log('An error occurred.', error)
      )
  }
}
