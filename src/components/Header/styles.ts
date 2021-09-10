import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
  height: 212px;
`;

export const Content = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between; 
  
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;


`;

export const Button = styled.button`
  background-color: var(--blue-light);
  padding: 0 2rem;
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
  color: var(--white);
  font-weight: 600;
  transition: all 0.2s linear;

  &:hover {
    box-shadow: 0px 0px 5px 1px var(--white);
    filter: brightness(0.9);
  }
`;

