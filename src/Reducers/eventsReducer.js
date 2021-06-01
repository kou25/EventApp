import { GET_EVENTS_FAILURE, GET_EVENTS_REQUEST, GET_EVENTS_SUCCESS, GET_EVENT_DETAILS_FAILURE, GET_EVENT_DETAILS_REQUEST, GET_EVENT_DETAILS_SUCCESS } from "../Constants/eventConstants"

  
  const initialState = {
    getEventsData: [],
    getEventsLoading: false,
    getEventsError: false,
    totalCount:0,
    getEventDetailData: {},
    getEventDetailLoading: false,
    getEventDetailError: false,
  }
  
  export default function EventsReducer(state = initialState, action) {
    switch (action.type) {
      case GET_EVENTS_REQUEST:
        return Object.assign({}, state, {
          getEventsLoading: true,
          getEventsError: false,
        })
      case GET_EVENTS_SUCCESS:
        return Object.assign({}, state, {
          getEventsLoading: false,
          getEventsError: false,
          getEventsData: action.response.data,
          totalCount: action.response.data.page.size
        })
      case GET_EVENTS_FAILURE:
        return Object.assign({}, state, {
          getEventsLoading: false,
          getEventsError: true,
          getEventsData: [],
        })
        case GET_EVENT_DETAILS_REQUEST:
          return Object.assign({}, state, {
            getEventDetailLoading: true,
            getEventDetailError: false,
          })
        case GET_EVENT_DETAILS_SUCCESS:
          return Object.assign({}, state, {
            getEventDetailLoading: false,
            getEventDetailError: false,
            getEventDetailData: action.response.data,
          })
        case GET_EVENT_DETAILS_FAILURE:
          return Object.assign({}, state, {
            getEventDetailLoading: false,
            getEventDetailError: true,
            getEventDetailData: [],
          })
      
      default:
        return state
    }
  }
  