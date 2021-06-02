import {
  GET_EVENTS_FAILURE,
  GET_EVENTS_REQUEST,
  GET_EVENTS_SUCCESS,
  GET_EVENT_DETAILS_REQUEST,
  GET_EVENT_DETAILS_SUCCESS,
  GET_EVENT_DETAILS_FAILURE,
  SEARCH_EVENT_VENUE_REQUEST,
  SEARCH_EVENT_VENUE_SUCCESS,
  SEARCH_EVENT_VENUE_FAILURE,
  UPDATE_LIKE,
} from "../Constants/eventConstants";
import { GET_API } from "../Middleware/symbols";

const BASE_URL = `https://app.ticketmaster.com/discovery/v2`;
const API_KEY = process.env.REACT_APP_API_KEY;

export function GetEvents() {
  return {
    [GET_API]: {
      endpoint: BASE_URL + "/events.json?apikey=" + API_KEY,
      types: [GET_EVENTS_REQUEST, GET_EVENTS_SUCCESS, GET_EVENTS_FAILURE],
      authenticated: true,
    },
  };
}

export function GetEventDetails(id) {
  return {
    [GET_API]: {
      endpoint: BASE_URL + "/events/" + id + "?apikey=" + API_KEY,
      types: [
        GET_EVENT_DETAILS_REQUEST,
        GET_EVENT_DETAILS_SUCCESS,
        GET_EVENT_DETAILS_FAILURE,
      ],
      authenticated: true,
    },
  };
}

export function SearchEvents(keyword) {
  return {
    [GET_API]: {
      endpoint:
        BASE_URL +
        "/events.json?keyword=" +
        keyword +
        "&source=universe&apikey=" +
        API_KEY,
      types: [GET_EVENTS_REQUEST, GET_EVENTS_SUCCESS, GET_EVENTS_FAILURE],
      authenticated: true,
    },
  };
}

export function SearchVenue(keyword) {
  return {
    [GET_API]: {
      endpoint:
        BASE_URL + "/venues.json?keyword=" + keyword + "&apikey=" + API_KEY,
      types: [
        SEARCH_EVENT_VENUE_REQUEST,
        SEARCH_EVENT_VENUE_SUCCESS,
        SEARCH_EVENT_VENUE_FAILURE,
      ],
      authenticated: true,
    },
  };
}


export function updateLikedData(data)
{  
    return  {
        type: UPDATE_LIKE, data
    }
}