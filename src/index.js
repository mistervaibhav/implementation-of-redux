import Store from "./store";
import { reducer, initialState } from "./reducer";
import * as actions from "./actions";

const store = new Store(reducer, initialState);

store.subscribe(() => {
  console.log("STORE UPDATED");
});

console.group("INITIAL");
console.log(store.getState());
console.groupEnd();

store.dispatch(actions.addItem("clock"));
store.dispatch(actions.addItem("bag"));
store.dispatch(actions.addItem("cards"));

console.group("FINAL");
console.log(store.getState());
console.groupEnd();
