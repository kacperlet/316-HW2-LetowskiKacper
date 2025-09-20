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
export default class RemoveSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, initIndex) {
        super();
        this.app = initApp;
        this.index = initIndex;

        let song = initApp.state.currentList.songs[initIndex];
        this.song = {
            title: song.title,
            artist: song.artist,
            year: song.year,
            youTubeId: song.youTubeId
        };

    }

    executeDo() {
        this.app.removeSong(this.index);
    }
    
    executeUndo() {
        this.app.addSong(this.index, this.song);
    }
}