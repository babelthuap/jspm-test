import AppDispatcher from "../AppDispatcher";
import {ActionTypes} from "../Constants";

let ServerActions = {
  receiveLinks(links) {
    console.log('3. server actions: receiveLinks()');
    // now we need to tell everyone about it

    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVE_LINKS,
      links
    });
  },

  receiveOneLink(newBookmark) {
    console.log('3. server actions: postedBookmark()', newBookmark);

    AppDispatcher.dispatch({
      actionType: ActionTypes.POSTED_LINK,
      newBookmark
    });
  }

};

export default ServerActions;
