type ButtonSecondaryProps = {
  text: string;
  href: string;
  onClick?: () => void;
}

const ButtonSecondary = ({ text, href, onClick }: ButtonSecondaryProps) => (
  <a
    className="btn w-full border border-nexura-border bg-transparent text-white transition-transform duration-300 ease-out hover:scale-[1.02] sm:ml-0 sm:w-auto"
    href={href}
    onClick={onClick}
  >
    {text}
  </a>
)
export default ButtonSecondary;