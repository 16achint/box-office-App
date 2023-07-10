const ActorsCard = ({ name, image, gender, country, birthday, deathday }) => {
  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>

      <h1>
        {name} {!!gender && `(${gender})`}
      </h1>

      <p>{country ? `Comes from ${country}` : `No country know`}</p>

      {!!birthday && <p>Born {birthday}</p>}

      <p>{deathday ? `Died ${deathday}` : `Alive`} </p>
    </div>
  );
};
export default ActorsCard;
