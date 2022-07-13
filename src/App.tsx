import { ThemeProvider } from 'react-components';
import Counter from './modules/Counter/index.';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <Counter />
      </ThemeProvider>
    </>
  );
}
