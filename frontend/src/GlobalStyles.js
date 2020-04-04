import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        transition: all .25s ease-in ( .645, .045, .355, 1);
    }

    :root {
        --primary-color: #0c5a9a; 
        --neutral-color: #f5f1ed;
        --box-shadow: 0 8px 20px 0 rgba(0,0,0,.1);
    }
    ::selection {
        color: #fff;
        background-color: var(--primary-color);
    }

    body {
        font: 400 16px Roboto, sans-serif;
        color: #666;
        background-color: #fff;
        -webkit-font-smoothing: antialised;
    }

    h1 {
        color: var(--primary-color);
        font-size: 2.5rem;
        margin: 1rem 0;
        span {
            font-weight: 400;
        }
    }
    img {
        max-width: 100%;
    }
    .main-content {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
    }

    /* Form */
    input, button, textarea {
        font: 400 18px Roboto, sans-serif;
    }
    form {
        width: 100%;
    }
    form input {
        width: 100%;
        height: 60px;
        color: #333;
        border: 1px solid #dcdce6;
        border-radius: 8px;
        padding: 0 24px;
        margin: .3rem 0;
        flex-direction: column;
    }
    form textarea {
        width: 100%;
        min-height: 140px;
        resize: vertical;
        height: 60px;
        color: #333;
        border: 1px solid #dcdce6;
        border-radius: 8px;
        padding: 16px 24px;
        line-height: 24px;
    }
    .content-form {
        width: 100%;
        padding: 30px;
        box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
        border-radius: 8px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        @media(min-width: 600px) {
             padding: 50px;
        }
    }
    
    /* Buttons */
    button {
        cursor: pointer;
    }
    .button-depth {
        color: #fff;
        -webkit-transition: color .1s ease-in-out,background-color .1s ease-in-out;
        transition: color .1s ease-in-out,background-color .1s ease-in-out;
        -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,0.0125), 0 1px 1px rgba(0,0,0,0.05);
        box-shadow: inset 0 1px 0 rgba(255,255,255,0.0125), 0 1px 1px rgba(0,0,0,0.05);
        border-top-width: .0625rem;
        border-bottom-width: calc(.2rem + .0625rem);
    }
    .link:link, 
    .link:visited {
        -webkit-transition: all .1s ease-in;
        transition: all .1s ease-in;
    }

    .button {
        width: 100%;
        height: 60px;
        background-color: var(--primary-color);
        border: 0;
        border-radius: 50px;
        color: #fff;
        font-weight: 500;
        margin-top: 16px;
        display: inline-block;
        text-align: center;
        text-decoration: none;
        font-size: 18px;
        line-height: 60px;
        transition: filter .2s;

        &:hover {
            filter: brightness(90%);
        }
    }
    .clean-link {
        display: flex;
        align-items: center;
        margin-top: 40px;
        color: #41414d;
        font-size: 14px;
        text-decoration: none;
        font-weight: 500;
        transition: opacity .2s;

        &:hover {
            opacity: .8;
        }
    }
    .clean-link svg {
        margin-right: 8px;
    }

    .clean-links-block {
        display: flex;
        justify-content: space-between;
    }


    @media(min-width: 600px) {
        h1 {
            font-size: 3.5rem;
        }
        .clean-link {
            font-size: 18px;
        }
    }
   
  
`;

export default GlobalStyle;