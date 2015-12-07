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
  }
};

export default ServerActions;
