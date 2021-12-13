import * as types from "./actionTypes";

const initialState = {
  loading: false,
  shoppingCart: [],
  user: null,
  error: null,
};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_SHOPPINGCART:
      const newCart = [...state.shoppingCart, action.payload];
      return {
        ...state,
        shoppingCart: newCart,
      };
    case types.REMOVE_FROM_SHOPPINGCART:
      let newShoppingCart = [...state.shoppingCart];
      const index = state.shoppingCart.findIndex(
        (item) => item.id === action.payload
      );
      if (index >= 0) {
        newShoppingCart.splice(index, 1);
      }
      return {
        ...state,
        shoppingCart: newShoppingCart,
      };

    case types.SIGNUP_START:
    case types.LOGIN_START:
    case types.LOGOUT_START:
      return {
        ...state,
        loading: true,
      };
    case types.SIGNUP_SUCCESS:
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
      };
    case types.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case types.SIGNUP_FAIL:
    case types.LOGIN_FAIL:
    case types.LOGOUT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default shoppingCartReducer;
