import styled from 'styled-components/native';

export const HeaderRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const HeaderTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const AddButton = styled.TouchableOpacity`
  background-color: #4caf50;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`; 