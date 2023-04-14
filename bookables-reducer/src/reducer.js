export const initialState = {
    group: 'Rooms',
    bookableIndex: 0,
    hasDetails: false
};

export function reducer(state, action) {
    switch (action.type) {
        case 'SET_GROUP':
            return {
                ...state,
                group: action.payload,
                bookableIndex: 0
            };
        case 'SET_BOOKABLE':
            return {
                ...state,
                bookableIndex: action.payload
            };
        case 'TOGGLE_HAS_DETAILS':
            return {
                ...state,
                hasDetails: !state.hasDetails
            };
        default:
            return state;
    }
}