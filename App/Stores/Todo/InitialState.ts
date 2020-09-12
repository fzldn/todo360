import {Todo} from 'App/Types/Todo';
import TodoFixture from 'App/Fixtures/TodoFixture';

export interface TodoState {
  todos: Array<Todo>;
}

export const INITAL_STATE: TodoState = {
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
