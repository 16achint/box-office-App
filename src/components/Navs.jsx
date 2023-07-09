import { Link } from 'react-router-dom';
export default function Navs() {
  const LINKS = [
    {
      text: 'Home',
      to: '/',
    },
    {
      text: 'Starred',
      to: '/starred',
    },
  ];
  return (
    <div>
      <ul>
        {LINKS.map(item => (
          <li key={item.to}>
            <Link to={item.to}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
