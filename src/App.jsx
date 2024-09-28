import React from "react"
import { Header } from "./components/Header"
import { Button } from "./components/Button"

const ThemeContext = React.createContext()

function App ()
{
  const [ theme, setTheme ] = React.useState( "light" )
  
  function toggleTheme ()
  {
    setTheme( prevTheme  => prevTheme === "light" ? "dark" : "light" )
  }

  return (
    <ThemeContext.Provider value={ { theme, toggleTheme } }>
      <div className={`container ${theme}-theme`}>
        <Header />
        <Button />
      </div>
    </ThemeContext.Provider>
  )
}

export default App

export { ThemeContext }