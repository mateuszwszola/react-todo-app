import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import PageContent from './components/PageContent';
import TodoApp from './components/TodoApp';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PageContent>
        <TodoApp />
      </PageContent>
    </ThemeProvider>
  );
}

export default App;
