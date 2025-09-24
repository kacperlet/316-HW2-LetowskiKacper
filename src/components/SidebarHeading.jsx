import React from "react";

export default class SidebarHeading extends React.Component {
    handleClick = (event) => {
        const { createNewListCallback } = this.props;
        createNewListCallback();
    };
    render() {
        let isButtonDisabled = false;
        let className = "toolbar-button";
        if (this.props.currentList != null)
        {
            isButtonDisabled = true;
            className += " disabled";
        }
        
        return (
            <div id="sidebar-heading">
                <input 
                    type="button" 
                    id="add-list-button" 
                    className={className}
                    onClick={this.handleClick}
                    disabled={isButtonDisabled}
                    value="+" />
                Your Playlists
            </div>
        );
    }
}