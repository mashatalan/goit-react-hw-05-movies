import styled from '@emotion/styled';

export const Container = styled.div`
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 16px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  background-color: #ff4d4f;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d63031;
  }
`;
