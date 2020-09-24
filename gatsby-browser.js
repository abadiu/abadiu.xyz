import React from 'react'
import 'typeface-source-code-pro'
import 'typeface-source-sans-pro'
import 'typeface-source-serif-pro'

// import ThemeProvider from '~/providers/Theme';
import './src/styles/global.css'

// Duplicated in gatsby-ssr.js for server side rendering during the build
export const wrapRootElement = ({ element }) => (
    <>
        <div className="root overflow-hidden">{element}</div>
    </>
)
