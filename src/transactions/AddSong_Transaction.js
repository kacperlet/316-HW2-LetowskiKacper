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
export default class AddSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, initIndex) {
        super();
        this.app = initApp;
        this.index = initIndex;
    }

    executeDo() {
        this.app.addDefaultSong(this.index);
    }
    
    executeUndo() {
        this.app.removeSong(this.index);
    }
}