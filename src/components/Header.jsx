import React from "react"
import { ThemeContext } from "../App"

export const Header = () =>
{
    const { theme } = React.useContext( ThemeContext )
    return (
        <header className={ `${ theme }-theme` }>
            <h1>{ theme === "light" ? "Light" : "Dark" } Theme</h1>
        </header>
    )
}
