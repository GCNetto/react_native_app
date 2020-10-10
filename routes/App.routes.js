import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Tarefas from '../pages/Tarefas/Tarefas';
import Dashboard from '../pages/Dashboard/Dashboard';
import Projetos from '../pages/Projetos/Projetos';


const Tab = createBottomTabNavigator();

const AppRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      tabBarOptions={
        {
          activeTintColor: '#18db83',
          inactiveTintColor: '#dae3dc'
        }
      }>
      <Tab.Screen
        name="Tarefas"
        component={Tarefas}
        options={
          {
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="playlist-check"
                color={color}
                size={32} />
            )
          }
        } />
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={
          {
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="view-dashboard"
                color={color}
                size={32} />
            )
          }
        } />
      <Tab.Screen
        name="Projetos"
        component={Projetos}
        options={
          {
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="check-network"
                color={color}
                size={32} />
            )
          }
        } />
    </Tab.Navigator>
  )
}

export default AppRoutes;