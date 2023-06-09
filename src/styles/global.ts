import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  &::selection {
    color: ${props => props.theme.colors.textSecondary};
    background: ${props => props.theme.colors.accent};
  }
}
}
body {
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  font-size: 1rem;
  font-family: Poppins, sans-serif;
  -ms-overflow-style: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  
  &::-webkit-scrollbar {
    width: 0.2em;
    background-color: #F5F5F5;
    display: none;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #000000;
  }
}
h2 {
  font-size: 2.5rem;
  border-bottom: 0px solid ${props => props.theme.colors.text};
  width: fit-content;
}
`;