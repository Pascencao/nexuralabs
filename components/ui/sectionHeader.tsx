import Bajada from "./bajada";
import Tag from "./tag";
import Typography from "./typography";

interface SectionHeaderProps {
  tag?: string;
  title: string;
  description: string;
}

export default function SectionHeader({ tag, title, description }: SectionHeaderProps) {
  return (
    <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
        {tag && <Tag>{tag}</Tag>}
        <Typography type="h2">{title}</Typography>
        <Bajada>{description}</Bajada>
    </div>
  );
} 

    
