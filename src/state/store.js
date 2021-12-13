import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
const initialState = {
  todos: []
};

const todosReducer =(state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case "REMOVE_TODO":
      return {
        ...state,
        todos: [
          ...state.todos.slice(0, action.payload),
          ...state.todos.slice(action.payload + 1)
        ]
      };
    default:
      return state;
  }
}

const loggerMiddleware = () => next => action => {
  next(action);
  console.log(action);
};

const middlewares = [loggerMiddleware];

const store = createStore(todosReducer,composeWithDevTools(applyMiddleware(...middlewares),));

export default store;

