import { useState } from 'react';

// Hooks
import { useActions } from '../hooks/useActions';

// Redux
import { useTypedSelector } from '../hooks/useTypedSelector';
const RepoList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchRepos } = useActions();

  const { data, loading, error } = useTypedSelector(state => state.repos);
  console.log(data, loading, error);

  const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    searchRepos(term);
  };
  return (
    <div>
      <h1>Repo List</h1>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          value={term}
          onChange={e => setTerm(e.target.value)}
        />
        <button>Search</button>
      </form>

      {error && <h3>{error}</h3>}

      {loading === 'pending' && <h3>Loading...</h3>}

      {loading === 'completed' && !error && !data.length && <p>not found.</p>}

      {!error && loading === 'completed' && data && (
        <ul>
          {data.map(el => (
            <li key={el}>{el}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RepoList;
