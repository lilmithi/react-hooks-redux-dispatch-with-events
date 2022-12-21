let state;

function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

function dispatch(action) {
  state = reducer(state, action);
  render();
}

function render() {
  document.getElementById("container").textContent = state.count;
}

document
  .getElementById("button")
  .addEventListener("click", () => dispatch({ type: "counter/increment" }));

dispatch({ type: "@@init" });
