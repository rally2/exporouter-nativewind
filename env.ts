// Envs are defined in app.json under the "extra" key
import Constants from 'expo-constants';
const ENV = Constants.expoConfig?.extra ?? {};
export default ENV;
