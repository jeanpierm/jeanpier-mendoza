interface SectionTitleProps {
  title: string;
}
const SectionTitle = ({ title }: SectionTitleProps) => {
  return <h2 className="display-4">{title}</h2>;
};

export default SectionTitle;
