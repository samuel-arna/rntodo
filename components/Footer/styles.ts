import styled from 'styled-components/native';

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