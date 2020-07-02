import {Todo} from 'App/Types/Todo';

export interface TodoState {
  todos: Array<Todo>;
}

export const INITAL_STATE: TodoState = {
  todos: [
    {
      id: '1',
      title: 'Welcome to ToDo360',
      description: null,
      completed_at: null,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: '2',
      title: 'Swipe right to marked this task as completed',
      description: null,
      completed_at: null,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: '3',
      title: 'Swipe left to delete this task',
      description: null,
      completed_at: null,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: '4',
      title: 'This task comes with description',
      description: 'Hello World',
      completed_at: null,
      created_at: new Date(),
      updated_at: new Date(),
    },
  ],
};
