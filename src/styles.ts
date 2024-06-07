import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

img {
    border: none;
    max-width: 100%;
}

html,
body {
    font-family: "Be Vietnam Pro", sans-serif;
    height: 100%;
    font-size: 16px;
    background-color: #1B1D1F;
}

input,
textarea,
button,
select {
    outline: none;
    font-family: inherit;
    font-weight: 500;
    font-size: 14px;
}


::placeholder {
    color: #6C727F;
}

::-webkit-input-placeholder {
    color: #6C727F;
}

::-moz-placeholder {
    color: #6C727F;
}

:-ms-input-placeholder {
    color: #6C727F;
}

.Toastify__toast-container {
    width: 375px;
    max-width: 100%;
}

.Toastify__toast {
    font-family: "Be Vietnam Pro", sans-serif;
    font-size: 14px;
    font-weight: 500;
}


`