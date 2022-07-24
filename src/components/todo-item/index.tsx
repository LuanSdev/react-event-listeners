import { memo } from 'react';

import { EVENTS } from '../../events';
import { useListener } from '../../hooks/use-listener';
import { Container } from './styles';
import { TodoItemProps } from './types';

const Component = ({ data }: TodoItemProps) => {
  const { emit } = useListener({
    eventName: EVENTS.EDIT_TODO,
  });

  function handleEdit() {
    emit(data);
  }

  return (
    <Container>
      <input type="checkbox" id={`todo-item${data.id}`} />
      <label htmlFor={`todo-item${data.id}`}>{data.name}</label>
      <button onClick={handleEdit}>Editar</button>
    </Container>
  );
};

const TodoItem = memo(Component, (prev, next) => {
  const sameId = prev.data.id === next.data.id;
  const sameName = prev.data.name === next.data.name;

  return sameId && sameName;
});

export { TodoItem };
