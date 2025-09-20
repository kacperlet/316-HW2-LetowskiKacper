import { jsTPS_Transaction } from "jstps";
/**
 * MoveSong_Transaction
 * 
 * This class represents a transaction that works with drag
 * and drop. It will be managed by the transaction stack.
 * 
 * @author McKilla Gorilla
 * @author Kacper Letowski
 */
export default class EditSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, initIndex, initTitle, initArtist, initYear, initId) {
        super();
        this.app = initApp;
        this.index = initIndex;

        let song = initApp.state.currentList.songs[initIndex];
        this.oldSong = {
            title: song.title,
            artist: song.artist,
            year: song.year,
            youTubeId: song.youTubeId
        };
        this.newSong = {
            title: initTitle,
            artist: initArtist,
            year: initYear,
            youTubeId: initId
        };

    }

    executeDo() {
        this.app.editSong(this.index, this.newSong.title, this.newSong.artist, this.newSong.year, this.newSong.youTubeId);
    }
    
    executeUndo() {
        this.app.editSong(this.index, this.oldSong.title, this.oldSong.artist, this.oldSong.year, this.oldSong.youTubeId);
    }
}