import {Todo} from 'App/Types/Todo';
import {ListRenderItemInfo} from 'react-native';

interface TodoListProps {
  data: Array<Todo> | null;
}

interface SwipeData {
  key: string;
  value: number;
  direction: 'left' | 'right';
  isOpen: boolean;
}

interface TodoHiddenItemProps<Todo> extends ListRenderItemInfo<Todo> {
  swipeData: SwipeData;
}
