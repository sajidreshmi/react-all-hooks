import React, {useContext, useState} from 'react'
import ThemeProvider, { useTheme, useThemeToggle } from './ThemeProvider'

const ApplyTheme = () => {
    const darkThemeFlag = useTheme()
    const toggleTheme = useThemeToggle()
 
  const applyThemeStyle = {
    backgroundColor: darkThemeFlag ? '#333' : '#CCC',
    color: darkThemeFlag ? '#CCC' : '#333',
    height: '100px',
    width: '100px',
    margin: '2rem',
    padding: '2rem'
} 

  return (
    <>
        <div>
            <button onClick={toggleTheme}>Set dark</button>
            <div style={applyThemeStyle}> theme</div>
        </div>
    </>
  )
}

export default ApplyTheme