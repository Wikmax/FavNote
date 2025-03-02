import { REMOVE_ITEM_SUCCESS, AUTH_SUCCESS, FETCH_REQUEST, FETCH_SUCCESS, ADD_ITEM_SUCCESS } from 'actions';

const initialState = {};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        [action.payload.itemType]: [...action.payload.data],
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        userID: action.payload.data._id,
      };
    case ADD_ITEM_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [...state[action.payload.itemType], action.payload.data],
      };
    case REMOVE_ITEM_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [...state[action.payload.itemType].filter(item => item._id !== action.payload.id)],
      };
    default:
      return state;
  }
};

export default rootReducer;
