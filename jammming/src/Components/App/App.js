import React from 'react';
//import logo from './logo.svg';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      SearchResults: [{name: 'name1', artist: 'artist1' , album: 'album1', id: 1}, 
                      {name: 'name2', artist: 'artist2' , album: 'album2', id: 2},
                      {name: 'name3', artist: 'artist3' , album: 'album3', id: 3},
                      {name: 'name4', artist: 'artist4' , album: 'album4', id: 4}
                    ],

      playlistName: "maddys mad house",

      playlistTracks: [{name: 'playlistName1', artist: 'playlistArtist1' , album: 'playlistAlbum1', id: 5},
                       {name: 'playlistName2', artist: 'playlistArtist2' , album: 'playlistAlbum2', id: 6},
                       {name: 'playlistName3', artist: 'playlistArtist3' , album: 'playlistAlbum3', id: 7},                   
                      ],

    };

    this.addTrack = this.addTrack.bind(this);

  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } 
    tracks.push(track);
    this.setState({playlistTracks: tracks });
  }

  render () {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.SearchResults} 
                         onAdd={this.addTrack} />
          <Playlist playlistName={this.state.playlistName} 
                    playlistTracks={this.state.playlistTracks}/>
        </div>
      </div>
    </div>
    )
  }
}

export default App;
