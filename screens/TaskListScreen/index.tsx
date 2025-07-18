import React from 'react';
import { FlatList } from 'react-native';
import TaskItem from '../../components/TaskItem';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container, ListContainer, EmptyText } from './styles';
import { useTaskListController } from './controller';

const TaskListScreen: React.FC = () => {
    const { tasks, toggleTask, clearCompleted, goToAddTask } = useTaskListController();

    return (
        <Container>
            <Header title="Minhas Tarefas" onAdd={goToAddTask} />
            <ListContainer>
                <FlatList
                    data={tasks}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TaskItem task={item} onToggle={toggleTask} />
                    )}
                    ListEmptyComponent={<EmptyText>Sem Tarefas</EmptyText>}
                />
            </ListContainer>
            <Footer onClear={clearCompleted} />
        </Container>
    );
};

export default TaskListScreen; 