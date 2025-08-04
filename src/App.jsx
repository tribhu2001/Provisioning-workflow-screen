import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { defaultTheme } from './tokens';
import ProvisioningWorkflow from './ProvisioningWorkflow';

const GlobalStyle = createGlobalStyle`

  body {
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: ${({ theme }) => theme.fontSizes.body};
    color: ${({ theme }) => theme.colors.text.primary};
    margin: 0;
    background-color: ${({ theme }) => theme.globalBackground};
    min-height: 100vh;
    overflow-y: scroll;
  }

  button, input, select, textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <ProvisioningWorkflow />
    </ThemeProvider>
  );
}

export default App;