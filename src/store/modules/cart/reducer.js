const INITIAL_STATE = [];
export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@cart/ADD_SUCCESS': {
      return [...state, action.product];
    }
    case '@cart/REMOVE': {
      return state.filter(product => {
        return product.id !== action.id;
      });
    }

    case '@cart/UPDATE_AMOUNT_SUCCESS': {
      const productExists = state.findIndex(p => p.id === action.id);

      if (productExists >= 0) {
        const stateCopy = state.slice();
        stateCopy[productExists].amount = Number(action.amount);
        return stateCopy;
      }
      return state;
    }
    default:
      return state;
  }
}
