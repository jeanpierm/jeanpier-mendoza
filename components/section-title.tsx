interface SectionTitleProps {
  title: string;
}
const SectionTitle = ({ title }: SectionTitleProps) => {
  return <h2 className="display-4 text-center">{title}</h2>;
};

export default SectionTitle;
