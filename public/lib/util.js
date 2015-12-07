import $ from "jquery";

let util = {};

util.getBookmarks = () => $.get('/api/links');
util.addBookmark = newBookmark => $.post('/api/links', newBookmark);

export default util;
