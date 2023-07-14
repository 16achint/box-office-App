const ShowCard = ({ name, image, id, summary, onStarMeClick, isStarred }) => {
  const summaryScript = summary
    ? summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, ' ')
    : 'No description';
  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>
      <h1>{name}</h1>
      <p>{summaryScript}</p>
      <div>
        <a href={`/show/${id}`} target="_blank" rel="noreferrer">
          Read More
        </a>
        <button type="button" onClick={() => onStarMeClick(id)}>
          {isStarred ? 'UnStar me' : 'Star me'}
        </button>
      </div>
    </div>
  );
};
export default ShowCard;
