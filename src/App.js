import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import theme from './theme';
import { TodoListsProvider } from './contexts/todoListsContext';
import { TodosProvider } from './contexts/todosContext';
import PageContent from './components/PageContent';
import TodoApp from './components/TodoApp';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <TodoListsProvider>
          <TodosProvider>
            <Router>
              <Route path="/:listUrl?">
                <PageContent>
                  <TodoApp />
                </PageContent>
              </Route>
            </Router>
          </TodosProvider>
        </TodoListsProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
