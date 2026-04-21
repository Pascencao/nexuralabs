type ButtonPrimaryProps = {
  text: string;
  href: string;
  onClick?: () => void;
  icon?: boolean;
}

const ButtonPrimary = ({ text, href, onClick, icon = false }: ButtonPrimaryProps) => (
  <a
    className="btn group mb-4 w-full bg-nexura-violet text-white shadow-card transition-transform duration-300 ease-out hover:scale-[1.02] active:scale-[0.99] sm:mb-0 sm:w-auto"
    href={href}
    onClick={onClick}
  >
    <span className="relative inline-flex items-center">
      {text}
      {icon && (
        <span className="ml-1.5 tracking-normal text-white/70 transition-transform duration-300 group-hover:translate-x-0.5">
          →
        </span>
      )}
    </span>
  </a>
)

export default ButtonPrimary;