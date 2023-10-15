// Envs are defined in app.json and injected at build time to "extra" key
import Constants from 'expo-constants';
const ENV = Constants.expoConfig?.extra ?? {};
export default ENV;
