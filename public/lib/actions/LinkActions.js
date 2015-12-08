import API from "../API";

let LinkActions = {
  getAllBookmarks() {
    console.log('1. link actions: getAllBookmarks()')
    API.fetchAllBookmarks();
  },

  saveNewBookmark(newBookmark) {
    console.log('1. link actions: saveNewBookmark()', newBookmark)
    API.saveNewBookmark(newBookmark);
  },

  deleteBookmark(id) {
    console.log('1. link actions: deleteBookmark()', id)
    API.deleteBookmark(id);
  },

  toggleLike(id) {
    console.log('1. link actions: toggleLike()', id)
    API.toggleLike(id);
  }
};

export default LinkActions;
