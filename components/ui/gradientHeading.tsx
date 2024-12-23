type GradientHeadingProps = {
  children: React.ReactNode;
}

const GradientHeading = ({ children }: GradientHeadingProps) => (
    <h1
      className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
      data-aos="fade-up"
    >
      {children}
    </h1>
  );
  export default GradientHeading;