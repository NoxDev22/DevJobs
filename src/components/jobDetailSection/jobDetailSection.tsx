import "./jobDetailSection.css";
type Props = {
  title: string;
  text: string | undefined;
  padding?: string;
};

export function JobDetailSection({ title, text, padding }: Props) {
  return (
    <div className="jobDetail__Section" style={{ padding: padding }}>
      <h2 className="">{title}</h2>
      <p>{text}</p>
    </div>
  );
}
