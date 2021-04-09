import React from 'react'; 
import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import GlobalStyles from "./styles/GlobalStyles";
// import dark from './styles/themes/dark';
import light from './styles/themes/light';

function App() {
  return (
    <div>
      <ThemeProvider theme={light}>
        <GlobalStyles />
        <Routes /> 
      </ThemeProvider>
    </div>
  );
}

export default App;
