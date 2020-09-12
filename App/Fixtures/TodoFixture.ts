import {Todo} from 'App/Types/Todo';

export default (props: Partial<Todo>): Todo => {
  const date = new Date();
  const defaults: Todo = {
    id: '1',
    title: 'Todo',
    description: null,
    completed_at: null,
    created_at: date,
    updated_at: date,
    deleted_at: null,
  };

  return {...defaults, ...props};
};
