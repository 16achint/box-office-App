import { useState } from 'react';
import { searchForShows, searchForPeople } from './../api/tvmaze';

export default function Home() {
  const [SearchStr, setSearchStr] = useState('');
  const [apiData, setApiData] = useState(null);
  const [apiError, setApiError] = useState(null);
  const [searchOption, setSearchOption] = useState('shows');

  const onRadioChanged = ev => {
    setSearchOption(ev.target.value);
  };
  const onSearchInputChange = ev => {
    setSearchStr(ev.target.value);
  };
  const onSearch = async ev => {
    ev.preventDefault();
    try {
      setApiError(null);
      if (searchOption === 'shows') {
        const result = await searchForShows(SearchStr);
        setApiData(result);
      } else {
        const result = await searchForPeople(SearchStr);
        setApiData(result);
      }
    } catch (error) {
      setApiError(error);
    }
  };
  const renderApiData = () => {
    if (apiError) {
      return <div>Error Occured : {apiError.message}</div>;
    }
    if (apiData) {
      return apiData[0].show
        ? apiData.map(data => <div key={data.show.id}>{data.show.name}</div>)
        : apiData.map(data => (
            <div key={data.person.id}>{data.person.name}</div>
          ));
    }
  };
  return (
    <div>
      <form onSubmit={onSearch}>
        <input type="text" value={SearchStr} onChange={onSearchInputChange} />
        <label>
          Shows
          <input
            type="radio"
            name="search-option"
            value="shows"
            checked={searchOption === 'shows'}
            onChange={onRadioChanged}
          />
        </label>
        <label>
          Actors
          <input
            type="radio"
            name="search-option"
            value="actors"
            checked={searchOption === 'actors'}
            onChange={onRadioChanged}
          />
        </label>
        <button type="submit">Search</button>
      </form>
      <div>{renderApiData()}</div>
    </div>
  );
}
