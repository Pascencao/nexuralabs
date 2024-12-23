
interface ArticleCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
  }
  
const ArticleCard = ({ icon, title, description }: ArticleCardProps) => {
    return (
      <article>
        {icon}
        <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
          {title}
        </h3>
        <p className="text-indigo-200/65">
          {description}
        </p>
      </article>
    );
};

export default ArticleCard