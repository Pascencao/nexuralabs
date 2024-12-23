'use client'
import { useEffect, useState } from "react";

const Typography = ({ children, type }: { children: React.ReactNode, type:string }) => {
    
    const [comp, setComp] = useState<React.ReactNode>(<></>)
    useEffect(() => {
        switch (type) {
            case 'h2':
                setComp(<h2 
                className="animate-[gradient_6s_linear_infinite] 
                    bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))]
                     bg-[length:200%_auto] bg-clip-text pb-8 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
                    >{children}</h2>)
                    break;
            case 'p':
                setComp(<p className="text-lg text-indigo-200/65 pb-8">{children}</p>)
                break;
            default:
                break;
        }
    }, [type])

    return (<>{comp}</>);
}

export default Typography;