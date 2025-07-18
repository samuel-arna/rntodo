import React from 'react';
import { Button } from 'react-native';
import { Container, Header, Input } from './styles';
import { useAddTaskController } from './controller';

const AddTaskScreen: React.FC = () => {
    const { title, setTitle, handleAdd } = useAddTaskController();

    return (
        <Container>
            <Header>Nova Tarefa</Header>
            <Input
                placeholder="Digite a tarefa"
                value={title}
                onChangeText={setTitle}
            />
            <Button title="Adicionar" onPress={handleAdd} />
        </Container>
    );
};

export default AddTaskScreen; 