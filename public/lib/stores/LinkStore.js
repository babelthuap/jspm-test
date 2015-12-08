import {EventEmitter} from "events";
import AppDispatcher from "../AppDispatcher";
import {ActionTypes} from "../Constants";

let _links = [];
let myIp;

let findIndexById = id => {
  for (let i = 0; i < _links.length; ++i) {
    if (_links[i].id === id) return i;
  }
  return -1;
}

class LinkStore extends EventEmitter {
  // 1. Register with the dispatcher
  constructor(props) {
    super(props);

    AppDispatcher.register(action => {
      switch (action.actionType) {
        case ActionTypes.RECEIVE_LINKS:
          console.log("4. received news about the new data", action)
          // do something
          _links = action.data.links;
          myIp = action.data.yourIp;
          this.emit("CHANGE");
          break;
        case ActionTypes.POSTED_LINK:
          console.log("4. received news about the posted link", action)
          // account for the new data
          _links.push(action.newBookmark);
          this.emit("CHANGE");
          break;
        case ActionTypes.DELETED_LINK:
          console.log("4. received news about the deleted link", action)
          _links = _links.filter(link => link.id !== action.deleted.deletedId);
          this.emit("CHANGE");
          break;
        case ActionTypes.TOGGLE_LIKED_LINK:
          console.log("4. received news about the liked link", action)

          // find by id and update
          let likedLink = action.likedLink;
          let index = findIndexById(likedLink.id);
          _links[index].likedBy[myIp] = likedLink.likedByUser;

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
    return _links.map(link => {
      link.numLikes = Object.keys(link.likedBy).filter(ip => {
        return link.likedBy[ip] && ip !== 'me';
      }).length;
      link.likedBy.me = link.likedBy[myIp];
      link.url = link.url.startsWith('http') ? link.url : 'http://' + link.url;
      link.safe = link.url.startsWith('https');
      return link;
    });
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
