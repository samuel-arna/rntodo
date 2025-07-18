import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TaskListScreen from '../screens/TaskListScreen';
import AddTaskScreen from '../screens/AddTaskScreen';

export type RootStackParamList = {
    TaskList: undefined;
    AddTask: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes: React.FC = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="TaskList">
            <Stack.Screen name="TaskList" component={TaskListScreen} options={{ title: 'Tarefas' }} />
            <Stack.Screen name="AddTask" component={AddTaskScreen} options={{ title: 'Adicionar Tarefa' }} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default Routes; 