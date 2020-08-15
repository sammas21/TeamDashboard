import * as actionTypes from '../actions';

const initialState = {
    teams: []
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADDTEAM:
            return {
                ...state,
                teams: state.teams.concat(action.val)
            }
        case actionTypes.ADDUSER:
            return {
                ...state,
                teams: state.teams.concat(action.teamName)
            }
        case actionTypes.DELETEUSER:
            return {
                ...state,
                teams: state.teams.concat(action.teamName)
            }
    }
    return state;
};

export default reducer;