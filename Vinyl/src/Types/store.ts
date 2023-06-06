export type Observer = ({ render: () => void } & HTMLElement);
import { getProduct } from "../Strore/actions";
import { Product } from "./products";
import { Screens } from "./types";


/*APP STATE*/

export type AppState = {
    screens: Screens;
    products: Product [],
}
export enum NavegateActions{
    "NAVEGATE" = "NAVEGATE",
}

export enum SomeActions{
    "SAVE_PRODUCT" = "SAVE_PRODUCT",
    "GET_PRODUCT" = "GET_PRODUCT",

}

export interface NavAction {
    action: NavegateActions.NAVEGATE;
    payload: Screens;
}

export interface SaveProductAction {
    action: SomeActions.SAVE_PRODUCT;
    payload: Product;
}

export interface GetProductAction {
    action: SomeActions.GET_PRODUCT;
    payload: Product [];
}

export type Actions = SaveProductAction | GetProductAction | NavAction ;
;