import {EventEmitter} from "events";
import AppDispatcher from "../AppDispatcher";
import {ActionTypes} from "../Constants";

let _links = [];

class LinkStore extends EventEmitter {
  // 1. Register with the dispatcher
  constructor(props) {
    super(props);

    AppDispatcher.register(action => {
      switch (action.actionType) {
        case ActionTypes.RECEIVE_LINKS:
          console.log("4. received news about the new data", action)
          // do something
          _links = action.links;
          this.emit("CHANGE");
          break;
        case ActionTypes.POSTED_LINK:
          console.log("4. received news about the posted link", action)
          // account for the new data
          _links.push(action.newBookmark);
          this.emit("CHANGE");
          break;
        default:
          // do nothing
      }
    });
  }

  // 2. Expose some data
  getAll() {
    // can do some computation on _links
    return _links; // FOR NOW
  }

  // Listen stuff
  startListening(callback) {
    this.on("CHANGE", callback);
  }
  stopListening(callback) {
    this.removeListener("CHANGE", callback);
  }
}

export default new LinkStore();
