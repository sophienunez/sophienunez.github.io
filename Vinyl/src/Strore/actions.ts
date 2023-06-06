import { Product } from "../Types/products";
import { Actions, NavAction, NavegateActions, SomeActions } from "../Types/store";
import { Screens } from "../Types/types";
import firebase from "../Utils/firebase";


export const navigate = ({payload}: Pick <NavAction, "payload">): NavAction => {
  return {
    action: NavegateActions.NAVEGATE,
    payload

  };
};
export const saveproduct = async (products: Product): Promise <Actions> => {
        await firebase.saveProductInDB(products);
        return {
          action: SomeActions.SAVE_PRODUCT,
          payload: products,
         
  }
};

export const getProduct = async (): Promise<Actions> => {
  try {
    const products = await firebase.getProductsFromDB();
    return {
      action: SomeActions.GET_PRODUCT,
      payload: products,
    };
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
