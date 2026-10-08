import './style.css';

function App() {
  return (
    <section className="playlist-header">
      <div className="container">
        {/* Top Header Section */}
        <div className="header">
          <img src="/genggeng.png" alt="cover" />

        <div className="details">
          <p>Public Playlist</p>
          <h1>geng geng Ad</h1>
          <p className="info">Adri. 49 songs, 2hr 53 min</p>
        </div>
      </div>

      {/* Play Button Section */}
      <div className="action-bar">
        <button className="play-btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
    </section>
  );
}

export default App;