import React from 'react';
import { HeaderRow, HeaderTitle, AddButton } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface HeaderProps {
    title: string;
    onAdd: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onAdd }) => (
    <HeaderRow>
        <HeaderTitle>{title}</HeaderTitle>
        <AddButton onPress={onAdd}>
            <Icon name="add" size={24} color="#fff" />
        </AddButton>
    </HeaderRow>
);

export default Header; 