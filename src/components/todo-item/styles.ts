import styled from 'styled-components';

export const Container = styled.li`
  display: grid;
  grid-template-columns: 1.5rem auto 4rem;
  column-gap: 0.2rem;
  align-items: center;

  padding: 0.25rem 0.8rem;

  border-radius: 5px;
  background-color: #f8f8f8;

  &:hover {
    outline: 1px solid #8908c4;
  }

  & > input:checked + label {
    color: #8908c4;
    font-weight: 500;
    text-decoration: line-through;
  }

  > label {
    text-transform: capitalize;
    letter-spacing: 2px;
    color: #555;
  }

  > button {
    background-color: transparent;
    text-decoration: underline;
    color: #43b9f0;
    border: none;
    font-weight: 500;
    text-underline-offset: 2px;

    cursor: pointer;
  }
`;
