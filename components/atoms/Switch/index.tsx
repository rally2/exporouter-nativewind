import { cssInterop } from 'nativewind';
import { Switch as NativeSwitch, SwitchProps } from 'react-native';

cssInterop(Switch, {
  className: {
    target: 'style'
  }
});

function Switch({ ...props }: SwitchProps) {
  return <NativeSwitch {...props} />;
}

export default Switch;
