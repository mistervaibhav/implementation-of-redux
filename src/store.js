class Store {
  #state;
  #reducer;
  #listeners = [];

  constructor(reducer, initialState = {}) {
    if (Store._instance) {
      throw new Error("Store already exists");
    }
    Store._instance = this;

    this.#state = initialState;
    this.#reducer = reducer;
  }

  getState = () => {
    return { ...this.#state };
  };

  dispatch = (action) => {
    this.#state = this.#reducer(this.#state, action);
    // this.#listeners.shift()();
    for (let i = 0; i < this.#listeners.length; i += 1) {
      this.#listeners[i]();
    }
  };

  subscribe = (listener) => {
    this.#listeners.push(listener);
  };
}

export default Store;
