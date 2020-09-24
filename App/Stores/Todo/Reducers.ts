import TodoFixture from './Fixtures';
import {
  COMPLETE_TODO,
  DELETE_TODO,
  RESTORE_TODO,
  TodosActionTypes,
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

export function todoReducer(
  state = initialState,
  action: TodosActionTypes,
): TodoState {
  const {type, payload} = action;
  switch (type) {
    case COMPLETE_TODO:
      return {
        todos: state.todos.filter((todo) => {
          const id = typeof payload === 'string' ? payload : payload.id;
          if (todo.id === id) {
            var date = new Date();
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
            todo.updated_at = new Date();
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
            todo.updated_at = new Date();
          }
          return todo;
        }),
      };
    case DELETE_TODO:
      return {
        todos: state.todos.filter((todo) => {
          const id = typeof payload === 'string' ? payload : payload.id;
          if (todo.id === id) {
            var date = new Date();
            todo.deleted_at = date;
            todo.updated_at = date;
          }
          return todo;
        }),
      };
    default:
      return state;
  }
}
