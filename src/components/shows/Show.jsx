import { useParams } from 'react-router-dom';

export default function Show() {
  const { showId } = useParams();
  return <div>Show page for show : {showId}</div>;
}
