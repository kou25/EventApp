import getApi from './get-api';


export function isValidJSON(data) {
    try {
        JSON.parse(data);
    } catch (e) {
        return false
    }
    return true
}

export default {
    getApi
}