import React from "react";
import { ThemeProvider } from 'styled-components'


const theme = {
    colors: {
        royalblue: "#4169E1",
        darkslategray: "#2F4F4F",
        white: "#FFFFFF",
        gray: "#808080",
        saddlebrown: "#8B4513"
    },
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);


export default Theme;