import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

:root {
    --primary-700: ${({ theme }) => theme.primary700};
    --primary-400: ${({ theme }) => theme.primary400};
    --secondary-700: ${({ theme }) => theme.secondary700};
    --secondary-400: ${({ theme }) => theme.secondary400};
    --text-black-700: ${({ theme }) => theme.textblack700};
    --text-black-400: ${({ theme }) => theme.textblack400};
    --text-white-700: ${({ theme }) => theme.textwhite700};
    --text-white-400: ${({ theme }) => theme.textwhite400};
    --light-700: ${({ theme }) => theme.light700};
    --light-400: ${({ theme }) => theme.light400};
    --dark-700: ${({ theme }) => theme.dark700};
    --dark-400: ${({ theme }) => theme.dark400};
    --font-1: ${({ theme }) => theme.font1};
    --font-2: ${({ theme }) => theme.font2};
}


html {
    font-size: 100%;
    box-sizing: border-box;
}

    *, *::after, *::before {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        padding: 0;
        position: relative;
        font-family:  var(--font-2);
        font-weight: 400;
    }

    h1, h2, h3, h4, h5 {
        font-family: var(--font-1);
        font-weight: 500;
        
    }

    h2 {
        font-size: 2rem;
    }

    h3 {
        font-size: 1.85rem;
    }

    button {
        font-family: inherit;
    }
    a {
        text-decoration: none;
        font-family: inherit;
        color: inherit;
    }


`
