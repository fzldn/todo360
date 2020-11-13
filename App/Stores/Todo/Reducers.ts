import TodoFixture from './Fixtures';
import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  REMOVE_TODO,
  RESTORE_TODO,
  TodoActionTypes,
  TodoState,
  UNDO_TODO,
  UPDATE_TODO,
} from './Types';

const initialState: TodoState = {
  todos: [
    TodoFixture({
      title: 'Welcome to ToDo360',
    }),
    TodoFixture({
      title: 'Swipe right to marked this task as completed',
    }),
    TodoFixture({
      title: 'Swipe left to delete this task',
    }),
    TodoFixture({
      title: 'This task comes with description',
      description: 'Hello World',
    }),
    TodoFixture({
      title: 'This task was completed',
      completed_at: new Date(),
    }),
    TodoFixture({
      title: 'This task was deleted',
      deleted_at: new Date(),
    }),
  ],
};

export function TodoReducer(
  state = initialState,
  action: TodoActionTypes,
): TodoState {
  var date = new Date();

  switch (action.type) {
    case COMPLETE_TODO:
      return {
        todos: state.todos.map((todo) => {
          const id =
            typeof action.payload === 'string'
              ? action.payload
              : action.payload.id;
          if (todo.id === id) {
            return {...todo, completed_at: date, updated_at: date};
          }
          return todo;
        }),
      };
    case UNDO_TODO:
      return {
        todos: state.todos.map((todo) => {
          const id =
            typeof action.payload === 'string'
              ? action.payload
              : action.payload.id;
          if (todo.id === id) {
            return {...todo, completed_at: null, updated_at: date};
          }
          return todo;
        }),
      };
    case DELETE_TODO:
      return {
        todos: state.todos.map((todo) => {
          const id =
            typeof action.payload === 'string'
              ? action.payload
              : action.payload.id;
          if (todo.id === id) {
            return {
              ...todo,
              completed_at: null,
              updated_at: date,
              deleted_at: date,
            };
          }
          return todo;
        }),
      };
    case RESTORE_TODO:
      return {
        todos: state.todos.map((todo) => {
          const id =
            typeof action.payload === 'string'
              ? action.payload
              : action.payload.id;
          if (todo.id === id) {
            return {...todo, deleted_at: null, updated_at: date};
          }
          return todo;
        }),
      };
    case REMOVE_TODO:
      return {
        todos: state.todos.filter((todo) => {
          const id =
            typeof action.payload === 'string'
              ? action.payload
              : action.payload.id;
          return todo.id !== id;
        }),
      };
    case ADD_TODO:
      return {
        todos: [...state.todos, TodoFixture(action.payload)],
      };
    case UPDATE_TODO:
      return {
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {...todo, ...action.payload, updated_at: date};
          }
          return todo;
        }),
      };
    default:
      return state;
  }
}
