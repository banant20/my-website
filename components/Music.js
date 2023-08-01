import React, { useState, useEffect } from 'react';
import styles from '../styles/components/music.module.css';

const Music = () => {
  const [nowPlaying, setNowPlaying] = useState(null);
  const [singers, setSingers] = useState([]);
  const [topSongs, setTopSongs] = useState([]);
  const [artistsTimeRange, setArtistsTimeRange] = useState('6months'); // Default time range for top artists is 6 months
  const [songsTimeRange, setSongsTimeRange] = useState('6months'); // Default time range for top songs is 6 months

  useEffect(() => {
    const fetchNowPlaying = async () => {
      const response = await fetch('/api/now-playing');
      const data = await response.json();
      setNowPlaying(data);
    };

    const fetchArtistsData = async () => {
      const response = await fetch(`/api/top-artists-${artistsTimeRange}`);
      const data = await response.json();
      setSingers(data.artists);
    };

    const fetchTracksData = async () => {
      const response = await fetch(`/api/top-tracks-${songsTimeRange}`);
      const data = await response.json();
      setTopSongs(data.tracks);
    };

    fetchTracksData();
    fetchArtistsData();
    fetchNowPlaying();

    const interval = setInterval(() => {
      fetchNowPlaying();
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [artistsTimeRange, songsTimeRange]); // Update the artists and songs data when their respective time ranges change

  const handleArtistsTimeRangeChange = (range) => {
    setArtistsTimeRange(range);
  };

  const handleSongsTimeRangeChange = (range) => {
    setSongsTimeRange(range);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>Music </div>
      <div className={styles.center}>As an ardent lover of music, I created this section to showcase not only my diverse taste 
        but also provide a space where I can play around with integrating real-time data leveraging the Spotify API. Here, you'll find a window into my current musical taste, 
        featuring my currently playing song, which is what I'm presently vibing to. <br/> <br/>
        
        Dive into the Top 10 Artists and Top 10 Songs sections, where you can filter the results based on the past 4 weeks, 6 months, and even All Time.
        Many of these these songs and artists have found their way into the very fabric of my being. I believe that understanding one's music 
        taste is a great way to understand who they are so I hope this helps to give you a better insight as to who I am &#128513;</div>
      <div className={styles.box}>
        <div className={styles.currentlyPlayingContainer}>
          <div className={styles.currentlyPlayingText}>Currently Playing:</div>
          <div className={styles.nowPlaying}>
          <img src={nowPlaying && nowPlaying.albumImageUrl ? nowPlaying.albumImageUrl : "/images/offline.png"} alt={nowPlaying?.album} className={styles.albumImage} />
            <div className={styles.songTitle}>{nowPlaying?.title}</div>
            <div className={styles.artist}>{nowPlaying?.artist}</div>
            <img src="/images/playbar.png" alt="Play Bar" className={styles.playbar} />
            <a href={nowPlaying?.songUrl} target="_blank" rel="noopener noreferrer" className={styles.spotifyLink}>
              Listen on Spotify &rarr;
            </a>
          </div>
        </div>
        <div className={styles.artistCard}>
          <div className={styles.topHeader}>Top 10 Artists</div>
          <div className={styles.timeRangeButtons}>
            <button
              className={artistsTimeRange === '4weeks' ? styles.activeButton : ''}
              onClick={() => handleArtistsTimeRangeChange('4weeks')}
            >
              4 Weeks
            </button>
            <button
              className={artistsTimeRange === '6months' ? styles.activeButton : ''}
              onClick={() => handleArtistsTimeRangeChange('6months')}
            >
              6 Months
            </button>
            <button
              className={artistsTimeRange === 'alltime' ? styles.activeButton : ''}
              onClick={() => handleArtistsTimeRangeChange('alltime')}
            >
              All Time
            </button>
          </div>
          {singers.map((artist, index) => (
            <div key={artist.artist} className={styles.artistLine}>
              <span className={styles.artistRank}>{index + 1}.</span>
              <img src={artist.artistImageUrl} alt={artist.artist} className={styles.artistImage} />
              <div className={styles.artistName}>
                <a href={artist.artistUrl} target="_blank" rel="noopener noreferrer">
                  {artist.artist}
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.artistCard}>
          <div className={styles.topHeader}>Top 10 Songs</div>
          <div className={styles.timeRangeButtons}>
            <button
              className={songsTimeRange === '4weeks' ? styles.activeButton : ''}
              onClick={() => handleSongsTimeRangeChange('4weeks')}
            >
              4 Weeks
            </button>
            <button
              className={songsTimeRange === '6months' ? styles.activeButton : ''}
              onClick={() => handleSongsTimeRangeChange('6months')}
            >
              6 Months
            </button>
            <button
              className={songsTimeRange === 'alltime' ? styles.activeButton : ''}
              onClick={() => handleSongsTimeRangeChange('alltime')}
            >
              All Time
            </button>
          </div>
          {topSongs.map((song, index) => (
            <div key={index} className={styles.artistLine}>
              <span className={styles.artistRank}>{index + 1}.</span>
              <img src={song.trackImageUrl} alt={song.title} className={styles.artistImage} />
              <div className={styles.artistInfo}>
                <div className={styles.songName}>
                  <a href={song.songUrl} target="_blank" rel="noopener noreferrer">
                    {song.title}
                  </a>
                </div>
                <div className={styles.singers}>{song.artist}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Music;
