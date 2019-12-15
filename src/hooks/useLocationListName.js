import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { TodoListsContext } from '../contexts/todoListsContext';
import slugify from 'slugify';

function useLocationListName(props) {
  const todoLists = useContext(TodoListsContext);
  let { listName } = useParams();
  listName = listName || 'tasks';

  // find list with listName url and get the name
  const list = todoLists.find(list => list.url === '/' + slugify(listName));
  return list ? list.name : listName;
}

export default useLocationListName;
