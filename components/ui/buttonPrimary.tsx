type ButtonPrimaryProps = {
  text: string;
  href: string;
  onClick?: () => void;
  icon?: boolean;
}

const ButtonPrimary = ({text, href, onClick, icon = false}: ButtonPrimaryProps) => (
    <div data-aos="fade-up" data-aos-delay={400}>
        <a
        className="btn group mb-4 w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
        href={href}
        onClick={onClick}
        >
        <span className="relative inline-flex items-center">
            {text}
            {icon && <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
            -&gt;
            </span>}
        </span>
        </a>
    </div>
)

export default ButtonPrimary;