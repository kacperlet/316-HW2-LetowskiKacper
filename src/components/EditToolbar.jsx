import React from "react";

export default class EditToolbar extends React.Component {
    render() {
        const { canAddSong, canUndo, canRedo, canClose, 
                undoCallback, redoCallback, closeCallback, createSongCallback} = this.props;
        let addSongClass = "toolbar-button";
        let undoClass = "toolbar-button";
        let redoClass = "toolbar-button";
        let closeClass = "toolbar-button";

        let addSongDisabled = false;
        let undoDisabled = false;
        let redoDisabled = false;
        let closeDisabled = false;

        if (!canAddSong)
        {
            addSongClass += " disabled";
            addSongDisabled = true;
        } 
        if (!canUndo)
        {
            undoClass += " disabled";
            undoDisabled = true;
        }
        if (!canRedo)
        {
            redoClass += " disabled";
            redoDisabled = true;
        } 
        if (!canClose)
        {
            closeClass += " disabled";
            closeDisabled = true;
        }
        return (
            <div id="edit-toolbar">
            <input 
                type="button" 
                id='add-song-button' 
                value="+" 
                className={addSongClass}
                onClick={createSongCallback}
                disabled={addSongDisabled}
            />
            <input 
                type="button" 
                id='undo-button' 
                value="⟲" 
                className={undoClass} 
                onClick={undoCallback}
                disabled={undoDisabled}
            />
            <input 
                type="button" 
                id='redo-button' 
                value="⟳" 
                className={redoClass} 
                onClick={redoCallback}
                disabled={redoDisabled}
            />
            <input 
                type="button" 
                id='close-button' 
                value="&#x2715;" 
                className={closeClass} 
                onClick={closeCallback}
                disabled={closeDisabled}
            />
        </div>
        )
    }
}