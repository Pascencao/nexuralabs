type ButtonSecondaryProps = {
  text: string;
  href: string;
  onClick?: () => void;
}

const ButtonSecondary = ({ text, href, onClick }: ButtonSecondaryProps) => (
  <a
    className="btn inline-flex min-h-[44px] w-full items-center justify-center border border-nexura-border bg-transparent text-white transition-transform duration-300 ease-out hover:scale-[1.02] sm:ml-0 sm:w-auto"
    href={href}
    onClick={onClick}
  >
    {text}
  </a>
)
export default ButtonSecondary;