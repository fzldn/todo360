import TodoFixture from './Fixtures';
import {
  COMPLETE_TODO,
  DELETE_TODO,
  REMOVE_TODO,
  RESTORE_TODO,
  TodoActionTypes,
  TodoState,
  UNDO_TODO,
} from './Types';

const initialState: TodoState = {
  todos: [
    TodoFixture({
      id: '1',
      title: 'Welcome to ToDo360',
    }),
    TodoFixture({
      id: '2',
      title: 'Swipe right to marked this task as completed',
    }),
    TodoFixture({
      id: '3',
      title: 'Swipe left to delete this task',
    }),
    TodoFixture({
      id: '4',
      title: 'This task comes with description',
      description: 'Hello World',
    }),
    TodoFixture({
      id: '5',
      title: 'This task was completed',
      completed_at: new Date(),
    }),
    TodoFixture({
      id: '6',
      title: 'This task was deleted',
      deleted_at: new Date(),
    }),
  ],
};

export function TodoReducer(
  state = initialState,
  action: TodoActionTypes,
): TodoState {
  const {type, payload} = action;
  var date = new Date();
  switch (type) {
    case COMPLETE_TODO:
      return {
        todos: state.todos.filter((todo) => {
          const id = typeof payload === 'string' ? payload : payload.id;
          if (todo.id === id) {
            todo.completed_at = date;
            todo.updated_at = date;
          }
          return todo;
        }),
      };
    case UNDO_TODO:
      return {
        todos: state.todos.filter((todo) => {
          const id = typeof payload === 'string' ? payload : payload.id;
          if (todo.id === id) {
            todo.completed_at = null;
            todo.updated_at = date;
          }
          return todo;
        }),
      };
    case DELETE_TODO:
      return {
        todos: state.todos.filter((todo) => {
          const id = typeof payload === 'string' ? payload : payload.id;
          if (todo.id === id) {
            todo.completed_at = null;
            todo.deleted_at = date;
            todo.updated_at = date;
          }
          return todo;
        }),
      };
    case RESTORE_TODO:
      return {
        todos: state.todos.filter((todo) => {
          const id = typeof payload === 'string' ? payload : payload.id;
          if (todo.id === id) {
            todo.deleted_at = null;
            todo.updated_at = date;
          }
          return todo;
        }),
      };
    case REMOVE_TODO:
      return {
        todos: state.todos.filter((todo) => {
          const id = typeof payload === 'string' ? payload : payload.id;
          return todo.id !== id;
        }),
      };
    default:
      return state;
  }
}
