import ActorsCard from './ActorsCard';
import { FlexGrid } from '../common/FlexGrid';
import NoFoundImageSrc from '../../lib/not-found-image.png';

export default function ActorsGrid({ actors }) {
  return (
    <FlexGrid>
      {actors.map(data => (
        <ActorsCard
          key={data.person.id}
          name={data.person.name}
          gender={data.person.gender}
          country={data.person.country ? data.person.country.name : null}
          birthday={data.person.birthday}
          deathday={data.person.deathday}
          image={data.person.image ? data.person.image.medium : NoFoundImageSrc}
        />
      ))}
    </FlexGrid>
  );
}
