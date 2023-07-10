import ActorsCard from './ActorsCard';

export default function ActorsGrid({ actors }) {
  return (
    <div>
      {actors.map(data => (
        <ActorsCard
          key={data.person.id}
          name={data.person.name}
          gender={data.person.gender}
          country={data.person.country ? data.person.country.name : null}
          birthday={data.person.birthday}
          deathday={data.person.deathday}
          image={
            data.person.image
              ? data.person.image.medium
              : '/not-found-image.png'
          }
        />
      ))}
    </div>
  );
}
