import { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTasks } from '../../contexts/TaskContext';

export const useAddTaskController = () => {
    const [title, setTitle] = useState('');
    const navigation = useNavigation();
    const { addTask } = useTasks();

    const handleAdd = () => {
        if (!title.trim()) {
            Alert.alert('Erro', 'Digite um título para a tarefa.');
            return;
        }
        addTask(title);
        setTitle('');
        navigation.goBack();
    };

    return {
        title,
        setTitle,
        handleAdd,
    };
}; 