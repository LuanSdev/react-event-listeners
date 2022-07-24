import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #fff;
  box-shadow: 0 0 72px #9707d955;
  border-radius: 10px;

  padding: 1rem;
  height: 80vh;
  aspect-ratio: 3/4;
`;

export const Divider = styled.span`
  background-color: #a847ed22;
  width: 80%;
  height: 1px;

  margin: 1rem auto;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 0.45rem;

  padding: 0.5rem;
  overflow-y: auto;
`;
