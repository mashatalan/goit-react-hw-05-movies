import styled from '@emotion/styled';

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 20px;
  border: 1px solid gray;
  border-radius: 4px;
  width: 50%;
  margin-right: 10px;
  box-shadow: 0 2px 4px 2px purple;

  &:focus {
    outline: none;
    border: 1px solid plum;
    box-shadow: 0 2px 4px 2px plum;
  }
`;

export const Button = styled.button`
  padding: 5px;
  width: 50px;
  font-size: 21px;
  background-color: palegoldenrod;
  color: black;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  box-shadow: 0 2px 4px 2px purple;

  &:hover {
    background-color: plum;
    color: white;

  }
  `
  export const Span = styled.span`
    font-size: 25px;
  `;
