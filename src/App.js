import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import { TodoListsProvider } from './contexts/todoListsContext';
import PageContent from './components/PageContent';
import TodoApp from './components/TodoApp';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <TodoListsProvider>
          <Router>
            <Route path="/:listName?">
              <PageContent>
                <TodoApp />
              </PageContent>
            </Route>
          </Router>
        </TodoListsProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
