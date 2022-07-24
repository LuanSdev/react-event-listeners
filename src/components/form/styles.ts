import styled from 'styled-components';

export const Container = styled.form`
  display: grid;
  grid-template-columns: auto 6rem;
  column-gap: 1rem;

  > input {
    border: 1px solid #ededed;
    border-radius: 5px;
    height: 2.4rem;
    padding: 0 0.6rem;

    font-size: 1rem;
  }

  > input::placeholder {
    color: #b7b7b7;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  column-gap: 0.25rem;
`;

type ButtonProps = {
  bgColor?: string;
};

export const Button = styled.button<ButtonProps>`
  border: none;
  border-radius: 5px;
  background-color: ${({ bgColor }) => bgColor || '#8908c4'};
  color: #eee;
  padding: 0 0.8rem;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: 0.3s;

  &:hover {
    filter: hue-rotate(20deg);
  }

  &:active {
    opacity: 0.7;
  }

  > svg {
    color: #fff;
  }
`;
