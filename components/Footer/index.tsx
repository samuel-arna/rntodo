import React from 'react';
import { Footer, ClearButton, ClearButtonText } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface FooterProps {
    onClear: () => void;
}

const FooterComponent: React.FC<FooterProps> = ({ onClear }) => (
    <Footer>
        <ClearButton onPress={onClear}>
            <Icon name="delete" size={22} color="#fff" />
            <ClearButtonText>Limpar Concluídas</ClearButtonText>
        </ClearButton>
    </Footer>
);

export default FooterComponent; 