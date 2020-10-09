import React from 'react';
// import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './App.routes';
// import AuthRoutes from './auth.routes';

// import { UsuarioContext } from '../contexts/user';

const Routes = () => {

//   const { user } = useContext(UsuarioContext);

  return (
    <NavigationContainer>
      <AppRoutes />
      {/* {
        user ?
          <AppRoutes />
          :
          <AuthRoutes />
      } */}
    </NavigationContainer>
  )
};

export default Routes;