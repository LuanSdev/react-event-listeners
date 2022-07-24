import { FormEvent, useContext, useRef, useState } from 'react';
import { FiCheck, FiX } from 'react-icons/fi';

import { TODO_CONTEXT } from '../../contexts/todo-context';
import { EVENTS } from '../../events';
import { useListener } from '../../hooks/use-listener';

import { Button, ButtonContainer, Container } from './styles';

export function Form() {
  useListener({
    eventName: EVENTS.EDIT_TODO,
    listen: true,
    callback: handleSetForm,
  });

  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const { handleAddTodo, handleUpdateTodo } = useContext(TODO_CONTEXT);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSetForm(data: { name: string; id: string }) {
    if (!inputRef.current) return;

    inputRef.current.value = data.name;
    inputRef.current.focus();
    inputRef.current.select();

    setUpdatingId(data.id);
  }

  function handleConfirmClick() {
    if (!inputRef.current || !updatingId) return;

    const todoName = inputRef.current.value;

    handleUpdateTodo({ name: todoName, id: updatingId });
    reset();
  }

  function handleAddClick() {
    if (!inputRef.current) return;

    const todoName = inputRef.current.value;

    handleAddTodo(todoName);
    reset();
  }

  function reset() {
    if (!inputRef.current) return;

    setUpdatingId(null);
    inputRef.current.value = '';
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (updatingId) return handleConfirmClick();

    handleAddClick();
  }

  return (
    <Container onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        name="name"
        placeholder="Nome do to-do..."
      />

      <ButtonContainer>
        {updatingId ? (
          <>
            <Button type="button" bgColor="#fc3f5f" onClick={reset}>
              <FiX size={18} />
            </Button>

            <Button
              bgColor="#43b9f0"
              type="button"
              onClick={handleConfirmClick}
            >
              <FiCheck size={18} />
            </Button>
          </>
        ) : (
          <Button type="button" onClick={handleAddClick}>
            Adicionar
          </Button>
        )}
      </ButtonContainer>
    </Container>
  );
}
