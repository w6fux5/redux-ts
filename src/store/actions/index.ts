import axios from 'axios';
import { ActionType } from '../action-types';
import { ActionInterface } from '../actions-interface';
import { Dispatch } from 'redux';

export const searchRepos =
  (term: string) => async (dispatch: Dispatch<ActionInterface>) => {
    dispatch({ type: ActionType.SEARCH_REPO });

    try {
      const { data } = await axios.get(
        'https://registry.npmjs.org/-/v1/search',
        {
          params: { text: term },
        }
      );

      const names = data.objects.map((el: any) => el.package.name);

      dispatch({
        type: ActionType.SEARCH_REPO_SUCCESS,
        payload: names,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.SEARCH_REPO_ERROR,
        payload: error.message,
      });
    }
  };
