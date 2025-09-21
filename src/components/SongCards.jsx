import SongCard from './SongCard.jsx';
import React from "react";

export default class SongCards extends React.Component {
    render() {
        const { currentList, 
                markSongForEditingCallback,
                moveSongCallback } = this.props;
        if (currentList === null) {
            return (
                <div id="song-cards"></div>
            )
        }
        else {
            return (
                <div id="song-cards">
                    {
                        currentList.songs.map((song, index) => (
                            <SongCard
                                id={'song-card-' + (index+1)}
                                key={'song-card-' + (index+1)}
                                index={index}
                                song={song}
                                moveCallback={moveSongCallback}
                                markSongForEditingCallback={markSongForEditingCallback}
                                removeSongCallback={this.props.removeSongCallback}
                                duplicateSongCallback={this.props.duplicateSongCallback}
                            />
                        ))
                    }
                </div>
            )
        }
    }
}