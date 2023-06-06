import { Screens } from "../Types/types";
import { Actions, AppState, Observer} from "../Types/store";
import { reducer } from "./reducer";

const emptyState: AppState = {
  screens: Screens.LOGIN,
  products: [],
};

export let appState = emptyState;

let observers: Observer[] = [];

const notifyObservers = () => observers.forEach((o) => o.render());

export const dispatch = (action: Actions) => {
  const clone = JSON.parse(JSON.stringify(appState));
  const newState = reducer(action, clone);
  
  appState = newState;
  notifyObservers();
};

export const addObserver = (ref: Observer) => {
  observers = [...observers, ref];
};