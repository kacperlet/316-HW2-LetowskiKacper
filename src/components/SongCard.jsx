import React from "react";

export default class SongCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDragging: false,
            draggedTo: false
        }
    }
    handleDragStart = (event) => {
        event.dataTransfer.setData("song", event.target.id);
        this.setState(prevState => ({
            isDragging: true,
            draggedTo: prevState.draggedTo
        }));
    }
    handleDragOver = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            isDragging: prevState.isDragging,
            draggedTo: true
        }));
    }
    handleDragEnter = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            isDragging: prevState.isDragging,
            draggedTo: true
        }));
    }
    handleDragLeave = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            isDragging: prevState.isDragging,
            draggedTo: false
        }));
    }
    handleDrop = (event) => {
        event.preventDefault();
        let target = event.target;
        let targetId = target.id;
        targetId = targetId.substring(target.id.indexOf("-") + 1);
        let sourceId = event.dataTransfer.getData("song");
        sourceId = sourceId.substring(sourceId.indexOf("-") + 1);
        
        this.setState(prevState => ({
            isDragging: false,
            draggedTo: false
        }));

        // ASK THE MODEL TO MOVE THE DATA
        this.props.moveCallback(sourceId, targetId);
    }

    handleDoubleClick = (event) => {
        event.preventDefault();

        this.props.markSongForEditingCallback(this.props.index, this.props.song);
    }

    handleRemoveButton = (event) => {
        event.preventDefault();

        this.props.removeSongCallback(this.props.index);
    }

    handleDuplicateButton = (event) => {
        event.preventDefault();

        this.props.duplicateSongCallback(this.props.index);
    }

    getItemNum = () => {
        return this.props.id.substring("song-card-".length);
    }

    render() {
        const { song } = this.props;
        let num = this.getItemNum();
        console.log("num: " + num);
        let itemClass = "song-card";
        if (this.state.draggedTo) {
            itemClass = "song-card-dragged-to";
        }
        return (
            <div
                id={'song-' + num}
                className={itemClass}
                onDragStart={this.handleDragStart}
                onDragOver={this.handleDragOver}
                onDragEnter={this.handleDragEnter}
                onDragLeave={this.handleDragLeave}
                onDrop={this.handleDrop}
                onDoubleClick={this.handleDoubleClick}
                draggable="true"
            >
                <div className="song-card-info">
                    <span>{num + "."}&nbsp;</span>
                    <a className="song-card-title" target="1">
                        {song.title}&nbsp;
                    </a>
                    <span className="song-card-year">({song.year})</span>
                    <span className="song-card-by">&nbsp;by&nbsp;</span>
                    <span className="song-card-artist">{song.artist}&nbsp;</span>
                </div>
                <div>
                    <input
                    className="song-card-button"
                    type="button"
                    value="⧉"
                    onClick={this.handleDuplicateButton}
                    >
                    </input>
                    <input
                        className="song-card-button"
                        type="button"
                        value="✕"
                        onClick={this.handleRemoveButton}
                    >
                    </input>
                </div>
                
            </div>
        )
    }
}