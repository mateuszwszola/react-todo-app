import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import PageContent from './components/PageContent';
import TodoApp from './components/TodoApp';
import { TodoListsProvider } from './contexts/todoListsContext';
import { Router } from '@reach/router';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <TodoListsProvider>
          <Router>
            <PageContent path="/">
              <TodoApp path="/:listName" />
              <TodoApp default />
            </PageContent>
          </Router>
        </TodoListsProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
