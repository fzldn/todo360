import {Todo} from 'App/Types/Todo';

interface TodoListProps {
  data: Array<Todo> | null;
}

interface SwipeData {
  key: string;
  value: number;
  direction: 'left' | 'right';
  isOpen: boolean;
}
