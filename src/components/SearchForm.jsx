import { useState } from 'react';
import { useSearchstr } from '../lib/useSearchStr';
import CustomRadio from './CustomRadio';
const SearchForm = ({ onSearch }) => {
  const [SearchStr, setSearchStr] = useSearchstr();
  const [searchOption, setSearchOption] = useState('shows');

  const onRadioChanged = ev => {
    setSearchOption(ev.target.value);
  };
  const onSearchInputChange = ev => {
    setSearchStr(ev.target.value);
  };

  const onSubmit = ev => {
    ev.preventDefault();

    const option = {
      q: SearchStr,
      searchOption,
    };

    onSearch(option);
  };
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={SearchStr} onChange={onSearchInputChange} />

      <CustomRadio
        label="Show"
        name="search-option"
        value="shows"
        checked={searchOption === 'shows'}
        onChange={onRadioChanged}
      />

      <CustomRadio
        label="Actors"
        name="search-option"
        value="actors"
        checked={searchOption === 'actors'}
        onChange={onRadioChanged}
      />

      <button type="submit">Search</button>
    </form>
  );
};
export default SearchForm;
