import { Link, useParams } from 'react-router-dom';
import { getShowById } from '../api/tvmaze';
import { useQuery } from '@tanstack/react-query';
import ShowMainData from '../components/shows/ShowMainData.jsx';
import Details from '../components/shows/Details';
import Seasons from '../components/shows/Seasons';
import Cast from '../components/shows/Cast';
import { styled } from 'styled-components';
import { TextCenter } from '../components/common/TextCenter';

export default function Show() {
  const { showId } = useParams();
  const { data: showData, error: showError } = useQuery({
    queryKey: ['show', showId],
    queryFn: () => getShowById(showId),
    refetchOnWindowFocus: false,
  });
  if (showError) {
    return <TextCenter>we have an error : {showError.message}</TextCenter>;
  }
  if (showData) {
    return (
      <ShowPageWrapper>
        <BackHomeWrapper>
          <Link to="/">Go to back Home</Link>
        </BackHomeWrapper>
        <ShowMainData
          image={showData.image}
          name={showData.name}
          rating={showData.rating}
          summary={showData.summary}
          genres={showData.genres}
        />
        <ShowPageWrapper>
          <h2>Details</h2>
          <Details
            status={showData.status}
            premiered={showData.premiered}
            network={showData.network}
          />
        </ShowPageWrapper>
        <ShowPageWrapper>
          <h2>Seasons</h2>
          <Seasons seasons={showData._embedded.seasons} />
        </ShowPageWrapper>
        <ShowPageWrapper>
          <h2>Cast</h2>
          <Cast cast={showData._embedded.cast} />
        </ShowPageWrapper>
      </ShowPageWrapper>
    );
  }
  return <TextCenter>data is loading</TextCenter>;
}

const BackHomeWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  a {
    padding: 10px;
    color: ${({ theme }) => theme.mainColors.dark};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ShowPageWrapper = styled.div`
  margin: auto;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 900px;
  }
`;

const InfoBlock = styled.div`
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;
