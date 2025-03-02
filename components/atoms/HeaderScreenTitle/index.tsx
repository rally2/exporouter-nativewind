import Typography from '../Typography';

export type Props = {
  title: string;
};


const HeaderScreenTitle = ({ title }: Props) => {
  return (
    <Typography
      className="!color-Neutral-Grey-0 dark:!color-Neutral-Grey-0"
      font="inter-bold"
      size="body-16"
    >
      {title}
    </Typography>
  );
};

export default HeaderScreenTitle;
