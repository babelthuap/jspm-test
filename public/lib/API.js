import {get, post, ajax} from "jquery";
import ServerActions from "./actions/ServerActions";

let API = {
  fetchAllBookmarks() {
    console.log('2. API: getBookmarks')
    get('/api/links').done(data => ServerActions.receiveLinks(data.links));
  },

  saveNewBookmark(newBookmark) {
    console.log('2. API: addBookmark')
    post('/api/links', newBookmark).done(data => ServerActions.receiveOneLink(data));
  },

  deleteBookmark(id) {
    console.log('2. API: deleteBookmark', id);
    ajax({
      url: `/api/links/${id}`,
      method: 'DELETE'
    })
    .done(data => ServerActions.receiveDeletedId(data))
    .fail(err => console.log('Error deleting bookmark:', err))
  }
}

export default API;
