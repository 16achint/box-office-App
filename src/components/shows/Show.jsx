import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getShowById } from '../../api/tvmaze';
import { useQuery } from '@tanstack/react-query';

// const useShowById = showId => {
//   const [showData, setShowData] = useState(null);
//   const [showError, setShowError] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await getShowById(showId);
//         setShowData(response);
//       } catch (err) {
//         setShowError(err);
//       }
//     }
//     fetchData();
//   }, [showId]);

//   return { showData, showError };
// };
export default function Show() {
  const { showId } = useParams();
  //   const { showData, showError } = useShowById(showId);
  const { data: showData, error: showError } = useQuery({
    queryKey: ['show', showId],
    queryFn: () => getShowById(showId),
  });

  if (showError) {
    return <div>we have an error : {showError.message}</div>;
  }
  if (showData) {
    return <div>got show Data : {showData.name}</div>;
  }
  return <div>data is loading</div>;
}
