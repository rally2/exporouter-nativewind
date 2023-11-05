import { Redirect } from 'expo-router';

export default function RootEntry() {
  return <Redirect href={'/(auth)/'} />;
}
