import "modern-normalize";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  --main-black-color: #101828;
  --main-white-color: #fff;
  --button-active-color: #d84343;
  --button-color: #E44848;
  --text-grey-color: #475467;
  --raiting-yellow-color: #FFC531;
  --input-white-color: #F7F7F7;
  --features-white-color: #F2F4F7;
  --blur-text-color: rgba(16, 24, 40, 0.6);
  --grey-border-color: rgba(16, 24, 40, 0.2);
  --load-more-border-color: rgba(71, 84, 103, 0.2);
  --font-family: "Inter", sans-serif;
  --transition-dur-and-func: 250ms cubic-bezier(0.4, 0, 0.2, 1);

}

  body {
    margin: 0;
    --font-family: "Inter", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--main-white-color);
  }

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  style: none;
  margin: 0;
  color: var(--main-black-color);
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  }

  img {
    display: block;
    max-width: 100%;
    object-fit: cover;
  }

a {
   color: var(--main-black-color);
}

button {
  cursor: pointer;
}

div {
  color: var(--main-black-color);
}

  .container {
    max-width: 1440px;
    padding: 40px 64px;
}
`;
