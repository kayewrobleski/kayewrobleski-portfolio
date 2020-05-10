import "typeface-open-sans"
import "typeface-raleway"

const theme = {
    classPrefix: 'kw',
    colors: {
        primary: {
            light: '#fff9ee',
            main: '#ffefd5', // papayawhip
            dark: '#ffe5bb'
        },
        secondary: {
            light: '#f39797',
            main: '#f08080', // lightcoral
            dark: '#ed6969'
        },
        text: {
            primary: '#475665',
            secondary: '#5c6f83',
            enhanced: '#3c4956',
        },
        common: {
            black: '#000000',
            white: '#ffffff'
        }
    },
    typography: {
        fontFamily: {
            primary: 'Open Sans, sans-serif',
            secondary: 'Raleway, sans-serif',
        },
        fontWeight: {
            light: 300,
            lighter: 350,
            regular: 400,
            bolder: 500,
            bold: 600,
            boldest: 700,
        },
        h1: {
            fontSize: '2rem'
        },
        h2: {
            fontSize: '1.5rem',
        },
        h3: {
            fontSize: '1.17rem'
        },
        h4: {
            fontSize: '0.95rem'
        },
        h5: {
            fontSize: '0.83rem'
        },
        h6: {
            fontSize: '0.75rem'
        },
        body1: {
            fontSize: '1rem'
        },
        body2: {
            fontSize: '0.9rem'
        }        
    },
    breakpoints: {
        keys: {
            0: 'xs',
            1: 'sm',
            2: 'md',
            3: 'lg',
            4: 'xl'
        },
        values: {
            xl: '1920px',
            lg: '1280px',
            md: '960px',
            sm: '600px',
            xs: '0px',
        },
        up: (key) => breakpointUp(key),
        down: (key) => breakpointDown(key),
        between: (up, down) => breakpointBetween(up, down)
    },
    spacing: (factor) => `${0.25 * factor}rem`,
}

const breakpointUp = (key) => {
    const value = theme.breakpoints.values[key];
    return `@media only screen and (min-width: ${value})`;
}

const breakpointDown = (key) => {
    const value = theme.breakpoints.values[key];
    return `@media only screen and (max-width: ${value})`;
}

const breakpointBetween = (up, down) => {
    const valueUp = theme.breakpoints.values[up];
    const valueDown = theme.breakpoints.values[down];
    return `@media only screen and (min-width: ${valueUp}) and (max-width: ${valueDown})`;
}

export default theme;