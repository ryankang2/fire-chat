import types from "../actions/types.js";

const DEFAULT_STATE = {
    log:{}
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.UPDATE_CHAT_LOG:
            return { log: action.payload || ""};
        default: 
            return state;
    }
}