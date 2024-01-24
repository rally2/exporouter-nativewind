import { Switch as NativeSwitch, SwitchProps } from 'react-native';

function Switch({ ...props }: SwitchProps) {
  return <NativeSwitch {...props} />;
}

export default Switch;
