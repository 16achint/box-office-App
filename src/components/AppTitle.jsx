export default function AppTitle(props) {
  const {
    title = "BoxOffice",
    subtitle = "are you looking for a moive or an actor?",
  } = props;
  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}
