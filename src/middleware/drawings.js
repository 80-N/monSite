import axios from 'axios';
import { GET_DRAWINGS, saveDrawings, setError } from 'src/actions';

export default (store) => (next) => (action) => {
  console.log('Middleware drawing');
  switch (action.type) {
    case GET_DRAWINGS:
      console.log('je passe dans l\'action ', GET_DRAWINGS);

      axios.get('http://localhost:3001/drawings')
        .then((response) => {
          console.log(response);

          store.dispatch(saveDrawings(response.data));
        })
        .catch((error) => {
          const actionToDispatch = setError();
          store.dispatch(actionToDispatch);
          console.log('Une erreur est survenue.', error);
        });

      break;
    default:
      next(action);
      break;
  }
};
