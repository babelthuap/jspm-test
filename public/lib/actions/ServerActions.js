import AppDispatcher from "../AppDispatcher";
import {ActionTypes} from "../Constants";

let ServerActions = {
  receiveLinks(data) {
    console.log('3. server actions: receiveLinks()');
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVE_LINKS,
      data
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
  },

  receiveLikedId(likedLink) {
    console.log('3. server actions: receiveLikedId()', likedLink);
    AppDispatcher.dispatch({
      actionType: ActionTypes.TOGGLE_LIKED_LINK,
      likedLink
    });
  }

};

export default ServerActions;
