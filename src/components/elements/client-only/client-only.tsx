import {HTMLAttributes, ReactElement, ReactNode, useEffect, useState} from "react";

interface ClientOnlyProps {
    children: ReactElement | ReactElement[]
    delegated?: any
}

export default function ClientOnly(props: ClientOnlyProps) {

    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) {
        return null;
    }

    return <div {...props.delegated}>{props.children}</div>;

}