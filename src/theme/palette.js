
// https://material.io/resources/color/
export const color = {
    darkBlue: '#193856',
    blue: '#04409B',
    lightBlue: '#F8FAFD',
    white: '#FFFFFF',
    black: '#000000',
    grey: '#606D7C',
    green: '#1DA090',
    lightGrey: '#E5E7EC',
    red: '#AF0F3B',
    yellow: '#FFDA1F'

};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    primary: {
        main: color.darkBlue,
    },
    secondary: {
        main: color.blue,
    },
    text: {
        primary: color.darkBlue,
        secondary: color.grey,
    },
    background: {
        default: color.white,
        paper: color.lightBlue,
    },
    info: {
        main: color.black,
        contrastText: color.lightGrey
    },
    success: {
        main: color.green,
        contrastText: color.red,
        primer: color.yellow,

    },
    greys: {
        primer: '#A3ABB7',
        cloud9: '#D1D3D8',
        line7: '#E5E7EC',
        cloud: '#F8FAFD',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,



}