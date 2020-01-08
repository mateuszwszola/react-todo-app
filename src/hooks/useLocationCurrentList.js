import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { TodoListsContext } from '../contexts/todoListsContext';
import { extractListIdFromUrl } from '../helpers';

function useLocationCurrentList() {
  const todoLists = useContext(TodoListsContext);
  const { listUrl } = useParams();
  const listId = (listUrl && extractListIdFromUrl(listUrl)) || 'tasks';

  const currentList =
    todoLists.find(list => list.id === listId) ||
    todoLists.find(list => list.id === 'tasks');

  return currentList;
}

export default useLocationCurrentList;
