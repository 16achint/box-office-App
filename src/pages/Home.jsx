import { useState } from "react";
import { searchForShows } from "./../api/tvmaze";

export default function Home() {
  const [SearchStr, setSearchStr] = useState("");
  const [apiData, setApiData] = useState(null);
  const [apiError, setApiError] = useState(null);

  const onSearchInputChange = (ev) => {
    setSearchStr(ev.target.value);
  };
  const onSearch = async (ev) => {
    ev.preventDefault();
    try {
      setApiError(null);
      const result = await searchForShows(SearchStr);
      setApiData(result);
    } catch (error) {
      setApiError(error);
    }
  };
  const renderApiData = () => {
    if (apiError) {
      return <div>Error Occured : {apiError.message}</div>;
    }
    if (apiData) {
      return apiData.map((data) => (
        <div key={data.show.id}>{data.show.name}</div>
      ));
    }
  };
  return (
    <div>
      <form onSubmit={onSearch}>
        <input type="text" value={SearchStr} onChange={onSearchInputChange} />
        <button type="submit">Search</button>
      </form>
      <div>{renderApiData()}</div>
    </div>
  );
}
