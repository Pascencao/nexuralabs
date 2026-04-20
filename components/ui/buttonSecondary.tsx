type ButtonSecondaryProps = {
  text: string;
  href: string;
  onClick?: () => void;
}

const ButtonSecondary = ({ text, href, onClick }: ButtonSecondaryProps) => (
  <a
    className="btn w-full border border-nexura-border bg-transparent text-white transition duration-300 hover:scale-[1.02] hover:border-nexura-muted hover:bg-nexura-surface/50 sm:ml-0 sm:w-auto"
    href={href}
    onClick={onClick}
  >
    {text}
  </a>
)
export default ButtonSecondary;