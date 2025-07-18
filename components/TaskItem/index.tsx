import React from 'react';
import { Container, CheckboxTouchable, CheckboxBox, Title } from './styles';
import Icon from "react-native-vector-icons/MaterialIcons";
import { Task } from '../../contexts/TaskContext';

type Props = {
    task: Task;
    onToggle: (id: string) => void;
};

const TaskItem: React.FC<Props> = ({ task, onToggle }) => (
    <Container>
        <CheckboxTouchable onPress={() => onToggle(task.id)}>
            <CheckboxBox checked={task.completed}>
                {task.completed && <Icon name="check" size={16} color="#fff" />}
            </CheckboxBox>
        </CheckboxTouchable>
        <Title completed={task.completed}>{task.title}</Title>
    </Container>
);

export default TaskItem; 