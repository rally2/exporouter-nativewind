import { Text, TouchableOpacity, View } from 'react-native';
import Typography from '../Typography';
import { tv, VariantProps } from 'tailwind-variants';

// e.g. Button with variants using Tailwind Variants.

type ButtonVariant = VariantProps<typeof variants>;

interface Props extends ButtonVariant {}

const variants = tv({
  // If you want to apply base styling for a specific component
  // base: 'color-Neutral-Black dark:color-Neutral-Black font-inter-regular text-body-14',
  slots: {
    defaultButtonContainer: 'rounded-full px-2 py-4',
    defaultTextClassname: 'text-center'
  },
  variants: {
    // Name of the prop
    type: {
      // Values of the props.  In this case, "primary" and "secondary"
      primary: {
        defaultButtonContainer: 'bg-Neutral-White dark:bg-Neutral-Grey-100',
        defaultTextClassname: '!color-Neutral-Grey-100 dark:!color-Neutral-White'
      },
      secondary: {
        defaultButtonContainer: 'dark:bg-Neutral-White bg-Neutral-Grey-100',
        defaultTextClassname: 'dark:!color-Neutral-Grey-100 !color-Neutral-White'
      }
    }
  }
});

const Button = (props: Props) => {
  const { type } = props;
  const { defaultButtonContainer, defaultTextClassname } = variants({ type });

  return (
    <TouchableOpacity className={defaultButtonContainer()}>
      <Typography className={defaultTextClassname()} font="inter-regular" size="body-20">
        Test Button
      </Typography>
    </TouchableOpacity>
  );
};

export default Button;
