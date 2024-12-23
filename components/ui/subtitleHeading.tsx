
type SubtitleProps = {
    children: React.ReactNode;
  }
  
  const SubtitleHeading = ({ children }: SubtitleProps) => (
    <p
      className="mb-8 text-xl text-indigo-200/65"
      data-aos="fade-up"
      data-aos-delay={200}
    >
      {children}
    </p>
  );

  export default SubtitleHeading;