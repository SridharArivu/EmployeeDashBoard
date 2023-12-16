
import axios from 'axios';
import { fetchDataStart, fetchDataSuccess, fetchDataFailure} from './dataSlice';

export const fetchDataAction = (url) => async (dispatch) => {
  try {
    dispatch(fetchDataStart());
    const response = await axios.get(url);
    dispatch(fetchDataSuccess(response.data.data));
  } catch (error) {
    dispatch(fetchDataFailure(error.message));
  }
};


