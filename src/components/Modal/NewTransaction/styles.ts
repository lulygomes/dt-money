import styled from 'styled-components';
import { Styles } from 'react-modal';

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
    padding: 0,
  },
};


export const ModalContent = styled.form`
width: 100%;
position: relative;
padding: 1rem 2rem;

h2 {
  margin-top: 1rem;
  letter-spacing: 1.2px;
}

input {
  width: 100%;
  height: 4rem;
  margin-top: 1rem;
  padding-left: 1.5rem;
  border: solid 1px #d7d7d7;
  border-radius: 0.25rem;
  background: #E7E9EE;
  line-height: 1.5rem;

  &::placeholder {
    color: var(--text-body);
  } 
}

div.buttonBox {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin-top: 1rem;
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
  transition: all 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
}

`;

interface RadioBoxProps {
  isActive: boolean
  activeColor: 'green' | 'red'
}

const colors = {
  green: 'rgba(18, 164, 84, 0.1)',
  red: 'rgba(229, 46, 77, 0.1)'
}

export const RadioBox = styled.button<RadioBoxProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px #d7d7d7;
  border-radius: 0.25rem;
  height: 3.5rem;
  width: 15rem;
  transition: all 0.2s ease;
  background: ${
    (props) => 
      props.isActive
      ? colors[props.activeColor] 
      : 'transparante'
  };

  &:hover {
    border-color: #a7a7a7;
  }

  img {
    height: 1.5rem;
    margin-right: 0.50rem;
  }
`;