import "typeface-open-sans"
import "typeface-oswald"

const theme = {
    classPrefix: 'kw',
    colors: {
        primary: {
            light: '#263859',
            main: '#17223b'
        },
        secondary: {
            main: '#ff6768'
        },
        text: {
            primary: '#8290AA',
            secondary: '#ffffff'
        },
        common: {
            black: '#000000',
            white: '#ffffff'
        },
        surface: {
            on: '#6b778d',
            shadow: '#cb3100'
        }
    },
    typography: {
        fontFamily: {
            primary: 'Open Sans, sans-serif',
            secondary: 'Oswald, sans-serif',
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
            xl: 1920,
            lg: 1280,
            md: 960,
            sm: 600,
            xs: 400,
        },
        up: (key) => breakpointUp(key),
        down: (key) => breakpointDown(key),
        between: (up, down) => breakpointBetween(up, down)
    },
    spacing: (factor) => calcSpacing(factor),
    thickness: (value) => calcThickness(value)
}

const calcSpacing = (factor) => `${0.25 * factor}rem`;

const calcThickness = (value) => {
    let factor = value;
    switch (value) {
        case 'xs': factor = 10; break;
        case 'sm': factor = 12; break;
        case 'md': factor = 15; break;
        case 'lg': factor = 20; break;
        case 'xl': factor = 28; break;
    }
    return calcSpacing(factor);
}

const breakpointUp = (key) => {
    const value = theme.breakpoints.values[key];
    return `@media (min-width: ${value}px)`;
}

const breakpointDown = (key) => {
    const value = theme.breakpoints.values[key];
    return `@media (max-width: ${value}px)`;
}

const breakpointBetween = (up, down) => {
    const valueUp = theme.breakpoints.values[up];
    const valueDown = theme.breakpoints.values[down];
    return `@media only screen and (min-width: ${valueUp}px) and (max-width: ${valueDown}px)`;
}

export default theme;