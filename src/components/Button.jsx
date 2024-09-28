import React from "react"
import { ThemeContext } from "../App"

export const Button = () =>
{
    const { theme, toggleTheme } = React.useContext( ThemeContext )
    return (
        <button className={ `${ theme }-theme` } onClick={toggleTheme}>
            Switch Theme
        </button>
    )
}
