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
export default class DuplicateSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, initIndex) {
        super();
        this.app = initApp;
        this.index = initIndex + 1;

        let songToBeCopied = this.app.state.currentList.songs[initIndex];
        this.song = {
            title: songToBeCopied.title + " (copy)",
            artist: songToBeCopied.artist,
            year: songToBeCopied.year,
            youTubeId: songToBeCopied.youTubeId
        }
    }

    executeDo() {
        this.app.addSong(this.index, this.song);
    }
    
    executeUndo() {
        this.app.removeSong(this.index);
    }
}