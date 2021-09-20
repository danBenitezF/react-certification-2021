import { actions } from '../../types/actions';
export const reducer = (state, action) => {
    switch(action.type) { 
        case actions.THEME: 
            return {
                ...state,
                theme: action.payload,
            };
        default:
            return state;
    }
};
