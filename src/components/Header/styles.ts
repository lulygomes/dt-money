import styled from 'styled-components';
import { Styles } from 'react-modal';

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

export const customStyles: Styles = {
  overlay: {
    background: 'rgba(0,0,0,.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    maxWidth: '576px',
    margin: '2rem auto 0',
    border: 'none',
    borderRadius: '5px',
    background: '#F0F2F5',
  },
};

export const ModalContent = styled.section`
  width: 100%;
  padding: 0 1rem;
  h1 {
    margin-top: 1.2rem;
    margin-bottom: .5rem;
    letter-spacing: 1.2px;
  }

  input {
    width: 100%;
    height: 3.5rem;
    margin-top: 1rem;
    padding-left: 1.5rem;
    border: solid 1px #d7d7d7;
    border-radius: 0.25rem;
    background: #E7E9EE;
    line-height: 1.5rem;
  }

  div.buttonBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      background: transparent;
      border: solid 1px #d7d7d7;
      border-radius: 0.25rem;
      height: 3.5rem;
      width: 15rem;

      img {
        height: 1.5rem;
        margin-right: 0.50rem;
      }
    }
  }

  button.submit {
    margin-top: 1.5rem;
    width: 100%;
    border-radius: 0.25rem;
    border: none;
    background: var(--green);
    line-height: 4rem;

    color: var(--white);
    font-weight: 600;
    font-size: 1.1rem;
    letter-spacing: 1.2px;
  }
`;