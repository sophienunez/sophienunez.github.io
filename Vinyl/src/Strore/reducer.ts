import {Actions, AppState, NavegateActions, SomeActions} from "../Types/store";


export const reducer = (actions: Actions, state: AppState) => {
  const {action, payload} = actions;

  switch (action) {
    case SomeActions.SAVE_PRODUCT:
      state.products = [...state.products, payload];
      return state;
    
    case SomeActions.GET_PRODUCT:
      state.products = payload;
      return state;
    
      case NavegateActions.NAVEGATE:

        return {...state, screens: payload};
  
    default:
      return state;
  }

}