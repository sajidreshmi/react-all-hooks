import React from 'react'
import ApplyTheme from './ApplyTheme'
import ThemeProvider from './ThemeProvider'

const ContentTemplateExample = () => {
  return (
    <ThemeProvider>
        <ApplyTheme></ApplyTheme>
    </ThemeProvider>
  )
}

export default ContentTemplateExample