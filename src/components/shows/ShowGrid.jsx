import ShowCard from './ShowCard';

export default function ShowGrid({ shows }) {
  //   apiData.map(data => <div key={data.show.id}>{data.show.name}</div>);
  return (
    <div>
      {shows.map(data => (
        <ShowCard
          key={data.show.id}
          id={data.show.id}
          name={data.show.name}
          image={
            data.show.image ? data.show.image.medium : '/not-found-image.png'
          }
          summary={data.show.summary}
        />
      ))}
    </div>
  );
}
