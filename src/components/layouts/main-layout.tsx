import {ReactNode, useContext, useReducer} from "react";
import Header from "@/modules/header";
import Footer from "@/modules/footer";
import {ThemeContext} from "@/context/theme/theme-context";

interface MainLayoutProps {
    children: ReactNode | ReactNode[]
}

export function MainLayout(props: MainLayoutProps) {

    const {state} = useContext(ThemeContext)

    return (
        <div className={`${state.theme}`}>
            <Header/>
            {props.children}
            <Footer/>
        </div>
    )

}
