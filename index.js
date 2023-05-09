import 'react-native-gesture-handler';
import {enableLatestRenderer} from 'react-native-maps';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
enableLatestRenderer();