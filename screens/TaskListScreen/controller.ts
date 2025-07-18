import { useTasks } from '../../contexts/TaskContext';
import { useNavigation } from '@react-navigation/native';

export const useTaskListController = () => {
    const navigation = useNavigation();
    const { tasks, toggleTask, clearCompleted } = useTasks();

    const goToAddTask = () => {
        navigation.navigate('AddTask' as never);
    };

    return {
        tasks,
        toggleTask,
        clearCompleted,
        goToAddTask,
    };
}; 