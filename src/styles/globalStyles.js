import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap'); 
    /* @import url('https://fonts.googleapis.com/css2?family=Risque&display=swap');  */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background-color: #f5f5f5;
    }
    a {
        text-decoration: none;
        color: #ffff;
        font-size: 20px;
    }
    a:hover {
        color: #f5f5f5;
    }
    li {
        list-style-type: none;
    }
    button {
        transition: all ease-in-out 0.2s;
    }
    button:hover {
        transform: scale(1.02);
    }
`
 
export default GlobalStyle;