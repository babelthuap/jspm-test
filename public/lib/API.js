import {get, post} from "jquery";
import ServerActions from "./actions/ServerActions";

let API = {
  // API.getBookmarks = () => get('/api/links');
  fetchAllBookmarks() {
    console.log('2. API: getBookmarks')
    get('/api/links').done(data => ServerActions.receiveLinks(data.links));
  },

  addBookmark(newBookmark) {
    console.log('2. API: addBookmark')
    post('/api/links', newBookmark).done(data => ServerActions.postedBookmark(data));
  }
}

export default API;
