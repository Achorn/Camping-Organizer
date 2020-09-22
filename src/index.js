import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = {
  list: [
    { title: "BackPack", weight: 5.08, id: 0 },
    { title: "Treking Poles", weight: 3.01, id: 1 },
    { title: "Tent", weight: 12, id: 2 },
    { title: "Sleeping Pad", weight: 4.12, id: 3 },
    { title: "Sleeping Bag", weight: 5, id: 4 },
    { title: "Camera", weight: 15, id: 5 },
    { title: "Tri-pod", weight: 5.6, id: 6 },
    { title: "Jet-Boil", weight: 3.54, id: 7 },
    { title: "BackPack", weight: 5, id: 8 },
    { title: "BackPack", weight: 5, id: 9 },
    { title: "BackPack", weight: 5.08, id: 10 },
  ],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "remove":
      let nList = [...state.list];
      let updatedList = nList.filter((item) => {
        return item.id !== action.id;
      });
      return { list: updatedList };

    case "add":
      console.log(state);
      console.log(action);
      console.log(action.name, action.weight);
      let newList = [...state.list];
      newList.push({
        title: action.name,
        weight: Number.parseFloat(action.weight),
        id: state.list.length + 1,
      });
      return { list: newList };
    default:
      return state;
  }
}

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
