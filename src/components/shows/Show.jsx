import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getShowById } from '../../api/tvmaze';

export default function Show() {
  const { showId } = useParams();
  const [showData, setShowData] = useState(null);
  const [showError, setShowError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getShowById(showId);
        setShowData(response);
      } catch (err) {
        setShowError(err);
      }
    }
    fetchData();
  }, [showId]);
  if (showError) {
    return <div>we have an error : {showError.message}</div>;
  }
  if (showData) {
    return <div>got show Data : {showData.name}</div>;
  }
  return <div>data is loading</div>;
}
