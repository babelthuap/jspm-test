import $ from "jquery";

let API = {};

API.getBookmarks = () => $.get('/api/links');
API.addBookmark = newBookmark => $.post('/api/links', newBookmark);

export default API;
