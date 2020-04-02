import data from './sales.json';

//Define the actions that are dispatched by the store

// The types of actions that you can dispatch to modify the state of the store
export const TYPES = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
};

// Helper functions to dispatch actions, optionally with payloads
export const actionCreators = {
  add: item => {
    return {
      type: TYPES.ADD,
      payload: item,
    };
  },
  remove: itemId => {
    return {
      type: TYPES.REMOVE,
      payload: itemId,
    };
  }
};

// Initial state of the store
const initialState = {
  todos: data
};

// Function to handle actions and update the state of the store.
// - The reducer must return a new state object. It must never modify
//   the state object. State objects should be treated as immutable.
// - We set \`state\` to our \`initialState\` by default. Redux will
//   call reducer() with no state on startup, and we are expected to
//   return the initial state of the app in this case.
export const reducer = (state = initialState, action) => {
  const { todos } = state;
  const { type, payload } = action;

  switch(type) {
    case TYPES.ADD: {
      const newRecords = todos;
      newRecords.push(payload);
      return {
        ...state,
        todos: newRecords,
      };
    }
    case TYPES.REMOVE: {
      return {
        ...state,
        todos: todos.filter((item) => item.id !== payload)
      };
    }
  }
  return state;
};
