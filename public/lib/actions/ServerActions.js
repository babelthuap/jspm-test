import AppDispatcher from "../AppDispatcher";
import {ActionTypes} from "../Constants";

let ServerActions = {
  receiveLinks(links) {
    console.log('3. server actions: receiveLinks()');

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
  },

  receiveDeletedId(deleted) {
    console.log('3. server actions: receiveDeletedId()', deleted);

    AppDispatcher.dispatch({
      actionType: ActionTypes.DELETED_LINK,
      deleted
    });
  }

};

export default ServerActions;
