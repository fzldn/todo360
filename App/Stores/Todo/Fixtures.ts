import {Todo, TodoAdd} from './Types';
import {v4 as uuidv4} from 'uuid';

const TodoFixture = (todo: TodoAdd): Todo => {
  const date = new Date();
  const defaults: Todo = {
    id: uuidv4(),
    title: '',
    description: null,
    completed_at: null,
    created_at: date,
    updated_at: date,
    deleted_at: null,
  };

  return {...defaults, ...todo};
};

export default TodoFixture;
