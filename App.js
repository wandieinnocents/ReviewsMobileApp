import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import Navigator from './routes/HomeStack'

export default function App() {
  return (
      <Navigator />
  );
}


