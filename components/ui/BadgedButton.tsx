interface BadgedButtonProps {
    isActive: boolean;
    onClick: () => void;
    icon?: React.ReactNode;
    children: React.ReactNode;
}
  
function BadgedButton({ isActive, onClick, icon, children }: BadgedButtonProps) {
    return (
      <button
        className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-200 ${isActive ? "relative bg-gradient-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.indigo.500/0),theme(colors.indigo.500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]" : "opacity-65 transition-opacity hover:opacity-90"}`}
        aria-pressed={isActive}
        onClick={onClick}
      >
        {icon && (
          <span className={`fill-current ${isActive ? "text-indigo-500" : "text-gray-600"}`}>
            {icon}
          </span>
        )}
        <span>{children}</span>
      </button>
    );
}

export default BadgedButton;