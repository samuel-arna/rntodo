import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 8px;
`;

export const CheckboxTouchable = styled.TouchableOpacity`
  margin-right: 12px;
`;

export const CheckboxBox = styled.View<{ checked: boolean }>`
  width: 24px;
  height: 24px;
  border-width: 2px;
  border-color: #888;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  background-color: ${({ checked }) => (checked ? '#4caf50' : '#fff')};
`;

export const Title = styled.Text<{ completed: boolean }>`
  font-size: 16px;
  color: ${({ completed }) => (completed ? 'gray' : 'black')};
  text-decoration-line: ${({ completed }) => (completed ? 'line-through' : 'none')};
`; 