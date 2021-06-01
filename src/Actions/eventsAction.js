import {
  GET_EVENTS_FAILURE,
  GET_EVENTS_REQUEST,
  GET_EVENTS_SUCCESS,
  GET_EVENT_DETAILS_REQUEST,
  GET_EVENT_DETAILS_SUCCESS,
  GET_EVENT_DETAILS_FAILURE,
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
