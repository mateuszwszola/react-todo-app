import { useParams } from 'react-router-dom';
import { extractListIdFromUrl } from '../helpers';

function useLocationListId(props) {
  const { listUrl } = useParams();
  const listId = (listUrl && extractListIdFromUrl(listUrl)) || 'tasks';
  return listId;
}

export default useLocationListId;
