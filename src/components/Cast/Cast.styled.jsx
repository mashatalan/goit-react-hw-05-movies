import styled from '@emotion/styled';

export const List = styled.ul`
  padding-bottom: 20px;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  gap: 15px;
  border-bottom: 1px solid black;
`;
export const ActorItem = styled.li`
  &:hover,
  &:focus {
    cursor: pointer;
    box-shadow: 0 2px 4px 2px purple;
    transform: scale(1.05);
  }
`;
export const P = styled.p`
  margin-top: 20px;
  font-weight: bold;
  font-size: 18px;
  border: 2px solid purple ;
  border-radius: 10px;
  background-color: plum;
  padding: 10px;

`;
