import API from "../API";

let LinkActions = {
  getAllBookmarks() {
    console.log('1. link actions: getAllBookmarks')
    API.fetchAllBookmarks();
  },

  saveNewBookmark(newBookmark) {
    console.log('1. link actions: saving', newBookmark)
    API.addBookmark(newBookmark);
  }
};

export default LinkActions;
