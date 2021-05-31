import { GET_API } from './symbols';
import { isValidJSON } from './index'

function getApi(endpoint){
    let config = {
        method: 'GET'
    }


    return fetch(endpoint, config)
        .then((response) => {
            if (response.status === 200) {
                return response.text().then(data => {
                    return isValidJSON(data) ? ({data: JSON.parse(data), status: response.status}) : ({
                        data: {
                            error: true,
                            message: "Error while parsing the json."
                        }, status: response.status
                    })
                })
            } else {
                return response.json().then(data =>
                    ({data, status: response.status})
                )
            }
        })
        .catch(err => ({data: {error: true, message: "Internal Server Error"}, status: 500}));
}

export default store => next => action => {
    const getApiDetails = action[GET_API]
    if (typeof getApiDetails === 'undefined') {
        return next(action);
    }
    let {endpoint, types, authenticated} = getApiDetails;
    const [requestType, successType, errorType] = types;
    return (
        next({type: requestType}),
        getApi(endpoint, authenticated).then(
        response => {
            if (response.status === 200) {
                return next({
                    response,
                    type: successType
                })
            } else {
                return next({
                    response,
                    type: errorType
                })
            }
        }
    ))
}