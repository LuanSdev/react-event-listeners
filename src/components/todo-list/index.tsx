import { useContext } from 'react';

import { TODO_CONTEXT } from '../../contexts/todo-context';
import { Form } from '../form';
import { TodoItem } from '../todo-item';
import { Container, Divider, List } from './styles';

export function TodoList() {
  const { items } = useContext(TODO_CONTEXT);

  return (
    <Container>
      <Form />

      <Divider />

      <List>
        {items.map((item) => (
          <TodoItem key={item.id} data={item} />
        ))}
      </List>
    </Container>
  );
}
