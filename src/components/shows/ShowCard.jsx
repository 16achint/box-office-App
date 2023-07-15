import { styled } from 'styled-components';
import { StarIcon } from '../common/StarIcon';
import { SearchImgWrapper, SearchCard } from '../common/SearchCard';
const ShowCard = ({ name, image, id, summary, onStarMeClick, isStarred }) => {
  const summaryScript = summary
    ? summary
        .split(' ')
        .slice(0, 10)
        .join(' ')
        .replace(/<.+?>/g, ' ' + '...')
    : 'No description';
  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={image} alt={name} />
      </SearchImgWrapper>
      <h1>{name}</h1>
      <p>{summaryScript}</p>
      <ActionSection>
        <a href={`/show/${id}`} target="_blank" rel="noreferrer">
          Read More
        </a>
        <StarBtn type="button" onClick={() => onStarMeClick(id)}>
          <StarIcon active={isStarred} />
        </StarBtn>
      </ActionSection>
    </SearchCard>
  );
};
export default ShowCard;

const ActionSection = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration-color: #000;
    color: #000;
    &:hover {
      text-decoration-color: blue;
      color: blue;
    }
  }
`;

const StarBtn = styled.button`
  outline: none;
  border: 1px solid #8e8e8e;
  border-radius: 15px;
  padding: 5px 20px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
