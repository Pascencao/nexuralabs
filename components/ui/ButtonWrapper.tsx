
function ButtonWrapper({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex justify-center pb-12 max-md:hidden md:pb-16">
        <div className="relative inline-flex flex-wrap justify-center rounded-[1.25rem] bg-gray-800/40 p-1">
          {children}
        </div>
      </div>
    );
}

export default ButtonWrapper;