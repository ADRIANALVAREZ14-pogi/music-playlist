```jsx
import './style.css';

const songs = [
  {
    title: 'Wag Na',
    artists: 'Realest Cram, CK YG',
    image: '/genggeng.png',
    duration: '4:26',
  },
  {
    title: 'ILY',
    artists: 'Young Blood Neet, Bugoy Na Koykoy',
    image: '/sillyhoes.png',
    duration: '2:59',
  },
  {
    title: 'Dikapamigay',
    artists: 'Realest Cram, ENZO MF',
    image: '/paumaga.png',
    duration: '4:17',
  },
  {
    title: 'City Girl',
    artists: 'Adri.',
    image: '/citygirl.png',
    duration: '3:12',
  },
  {
    title: 'So Fine',
    artists: 'Adri.',
    image: '/sofine.png',
    duration: '3:20',
  },
  {
    title: 'Baby 123',
    artists: 'Adri.',
    image: '/baby123.png',
    duration: '3:15',
  },
];

function App() {
  return (
    <div className="container">

      <div className="playlist">
        <img src="/genggeng.png" alt="Playlist" />

        <div>
          <p>Public Playlist</p>
          <h1>geng geng Ad</h1>
          <p>Adri. • 49 songs, 2 hr 53 min</p>
        </div>
      </div>

      <button className="play">▶</button>

      <h2>Playlist Songs</h2>

      <div className="song-list">
        {songs.map((song, index) => (
          <div className="song" key={song.title}>

            <span>{index + 1}</span>

            <img src={song.image} alt={song.title} />

            <div className="song-info">
              <h3>{song.title}</h3>
              <p>{song.artists}</p>
            </div>

            <span>{song.duration}</span>

          </div>
        ))}
      </div>

    </div>
  );
}

export default App;
```
