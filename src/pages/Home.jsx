import { useState } from 'react';
import { searchForShows, searchForPeople } from './../api/tvmaze';
import SearchForm from '../components/SearchForm';
import ShowGrid from '../components/shows/ShowGrid';
import ActorsGrid from '../components/actors/actorsGrid';

export default function Home() {
  const [apiData, setApiData] = useState(null);
  const [apiError, setApiError] = useState(null);

  const onSearch = async ({ q, searchOption }) => {
    try {
      setApiError(null);
      let result;
      if (searchOption === 'shows') {
        result = await searchForShows(q);
        setApiData(result);
      } else {
        result = await searchForPeople(q);
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
    if (apiData?.length === 0) {
      return <div>No result</div>;
    }
    if (apiData) {
      return apiData[0].show ? (
        <ShowGrid shows={apiData} />
      ) : (
        <ActorsGrid actors={apiData} />
      );
    }
  };
  return (
    <div>
      <SearchForm onSearch={onSearch} />

      <div>{renderApiData()}</div>
    </div>
  );
}
