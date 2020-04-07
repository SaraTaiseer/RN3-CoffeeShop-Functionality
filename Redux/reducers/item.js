import { ADD_ITEM, REMOVE_ITEM, CHECKOUT } from "../actions/actionTypes";
import { Updates } from "expo";

const initialState = {
  cart: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_ITEM:
      const removeItem = action.payload;
      return {
        ...state,
        cart: state.cart.filter((item) => item !== removeItem),
      };
    case ADD_ITEM:
      const newItem = action.payload;
      let items = state.cart;

      const itemUpdated = items.find(
        (item) => item.drink === newItem.drink && item.option === newItem.option
      );
      if (itemUpdated) itemUpdated.quantity += newItem.quantity;
      else items = [...items, { ...newItem }];

      return {
        ...state,
        cart: [...items],
      };

    case CHECKOUT:
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};

export default reducer;
