import React from 'react'; 
import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import GlobalStyles from "./styles/GlobalStyles";
import dark from './styles/themes/dark';
import purple from './styles/themes/purple';
// import light from './styles/themes/light';

function App() {
  return (
    <div>
      <ThemeProvider theme={purple}>
        <GlobalStyles />
        <Routes /> 
      </ThemeProvider>
    </div>
  );
}

export default App;
