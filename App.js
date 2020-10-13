import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
// import Login from './pages/Login/Login';
import Routes from './routes';
import './services/firebase';
import { LogBox } from 'react-native';

export default function App() {
    LogBox.ignoreLogs(['Setting']);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Routes />
            {/* <Login /> */}
        </SafeAreaView>
    );
}