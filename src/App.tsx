import React from 'react'; 
import { ThemeProvider } from 'styled-components';
import GlobalStyles from "./styles/GlobalStyles";
import dark from './styles/themes/dark';
import light from './styles/themes/light';

function App() {
  return (
    <div>
      <ThemeProvider theme={light}>
        <GlobalStyles />
        <h1>Página Inicial</h1>
      </ThemeProvider>
    </div>
  );
}

export default App;
