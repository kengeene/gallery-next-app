import Typography from "@/app/_components/atoms/typography";

export const ComponentTitle = ({ title, subTitle }: { title: string; subTitle: string }) => {
  return (
    <div>
      <Typography type="large">{title}</Typography>
      <Typography type="secondary">{subTitle}</Typography>
    </div>
  );
};
