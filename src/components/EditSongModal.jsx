import React, { Component } from 'react';

export default class EditSongModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "?",
            artist: "?",
            year: "?",
            youTubeId: "?",
            changed: false
        }
    }

    handleChange = (event) => {
        const { id, value } = event.target;
        let field = id.split('-')[3];

        this.setState({
            changed: true,
            [`${field}`]: value
        });

        console.log(this.state);
    }

    handleConfirmButton = (event) => {
        event.preventDefault();
        console.log("Pressed confirm button");

        let { title, artist, year, youTubeId } = this.state;
        this.props.editSongCallback(this.props.songIndex, title, artist, year, youTubeId);
        this.props.hideEditSongModalCallback();
    }

    handleCancelButton = (event) => {
        event.preventDefault();
        console.log("Pressed cancel button");

        // Forces the Modal to update on the next open
        this.setState({
            changed: false
        });

        this.props.hideEditSongModalCallback();
    }

    handleKeyDown = (event) => {
        if (event.key === 'Enter')
        {
            console.log("Enter Key Pressed");

            document.getElementById("edit-song-confirm-button").click();
        }
        else if (event.key === 'Escape')
        {
            console.log("Escape Key Pressed");

            document.getElementById("edit-song-cancel-button").click();
        }
    }

    render() {
        const { song } = this.props;

        let confirmButtonDisabled = false;

        if (song && !(this.state.changed))
        {
            // INHERIT STATE FROM PROP
            this.state.title = song.title;
            this.state.artist = song.artist;
            this.state.year = song.year;
            this.state.youTubeId = song.youTubeId;

            // NO CHANGES HAVE BEEN MADE YET
            confirmButtonDisabled = true;
        }
        
        return (
            <div id="edit-song-modal" className="modal" data-animation="slideInOutLeft" onKeyDown={this.handleKeyDown} >
            <div id='edit-song-root' className="modal-root">
                <div id="edit-song-modal-header" class="modal-north">Edit Song</div>
                <div id="edit-song-modal-content" class="modal-center">
                    <div id="title-prompt" class="modal-prompt">Title:</div>
                    <input 
                        id="edit-song-modal-title-textfield" 
                        class='modal-textfield' 
                        type="text" 
                        value={this.state.title}
                        onChange={this.handleChange} 
                    />
                    <div id="artist-prompt" class="modal-prompt">Artist:</div>
                    <input 
                        id="edit-song-modal-artist-textfield" 
                        class='modal-textfield' 
                        type="text" 
                        value={this.state.artist} 
                        onChange={this.handleChange} 
                    />
                    <div id="year-prompt" class="modal-prompt">Year:</div>
                    <input 
                        id="edit-song-modal-year-textfield" 
                        class='modal-textfield' 
                        type="text" 
                        value={this.state.year} 
                        onChange={this.handleChange} 
                    />
                    <div id="you-tube-id-prompt" class="modal-prompt">YouTube Id:</div>
                    <input 
                        id="edit-song-modal-youTubeId-textfield" 
                        class='modal-textfield' 
                        type="text" 
                        value={this.state.youTubeId} 
                        onChange={this.handleChange} 
                    />
                </div>
                <div class="modal-south">
                    <input 
                        type="button" 
                        id="edit-song-confirm-button" 
                        className="modal-button" 
                        value='Confirm' 
                        disabled={confirmButtonDisabled}
                        onClick={this.handleConfirmButton}
                    />
                    <input 
                        type="button" 
                        id="edit-song-cancel-button" 
                        className="modal-button" 
                        value='Cancel' 
                        onClick={this.handleCancelButton}
                    />
                </div>
            </div>
        </div>
        );
    }
}