import { ActionType } from '../action-types';
import { ActionInterface } from '../actions-interface';

interface RepoState {
  loading: string | null;
  error: string | null;
  data: string[];
}

const initialState = {
  loading: '',
  error: null,
  data: [],
};

const repoReducer = (
  state: RepoState = initialState,
  action: ActionInterface
): RepoState => {
  switch (action.type) {
    case ActionType.SEARCH_REPO:
      return {
        loading: 'pending',
        error: null,
        data: [],
      };
    case ActionType.SEARCH_REPO_SUCCESS:
      return {
        loading: 'completed',
        error: null,
        data: action.payload,
      };
    case ActionType.SEARCH_REPO_ERROR:
      return {
        loading: 'completed',
        error: action.payload,
        data: [],
      };
    default:
      return state;
  }
};

export default repoReducer;
