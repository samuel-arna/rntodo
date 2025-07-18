import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 16px;
  background-color: #fff;
`;

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

export const ListContainer = styled.View`
  flex: 1;
`;

export const EmptyText = styled.Text`
  color: #888;
  text-align: center;
  margin-top: 32px;
`;

export const Footer = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 16px;
  background-color: #fff;
  border-top-width: 1px;
  border-top-color: #eee;
`;

export const ClearButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #f44336;
  padding: 12px 0;
  border-radius: 8px;
  margin-bottom: 30px;
`;

export const ClearButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-left: 8px;
`; 