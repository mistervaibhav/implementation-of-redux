class Store {
  #state;
  #reducer;

  constructor(reducer) {
    if (Store._instance) {
      throw new Error('Store already exists');
    }
    Store._instance = this;

    this.#state = {};
    this.#reducer = reducer;
  }

  getState = () => {
    return { ...this.#state };
  };

  dispatch = (action) => {
    this.#reducer(this.#state, action);
  };
}

export default Store;
