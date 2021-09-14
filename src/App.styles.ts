import styled, { createGlobalStyle } from "styled-components";
import BGImage from "./images/wallpaper.jpeg";

export const GlobalStyle = createGlobalStyle`
html  {
    height: 100%;
}

body {
    background-image: url(${BGImage}); 
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
}

* {
    box-sizing: border-box;
    font-family: 'Catamaran' sans-serif;

}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    font-size: 1.5rem;
    margin-bottom: 1rem !important;
    margin: 0;
    font-family: "Quicksand", sans-serif;
  }

  h1 {
    font-family: "Fredoka One", cursive;
    text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
    font-size: 50px;
    font-weight: 400;
    text-align: center;
    margin: 20px;
    line-height: 3rem;
    margin-top: 4rem;
    letter-spacing: 0.3px;
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #87cefa);
    border: 1px solid #6495ed;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
    font-family: "Quicksand", sans-serif;
    font-weight: 600;
    font-size: 1rem;
  }

  .start {
    max-width: 200px;
  }
`;
