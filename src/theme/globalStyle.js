import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,600&display=swap');
*,*::before, *::after{
    box-sizing:border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
html{
    font-size: 62.5%
}
body{
    margin: 0;
    font-size:1.6rem;
    font-family:'Montserrat',sans-serif;
}
`;

export default GlobalStyle;
