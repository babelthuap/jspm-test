import React from 'react';
import $ from "jquery";
import List from './List';
import Form from './Form';

console.log('in AppController');


class AppController extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'AppController';

    this.state = {
      bookmarks: []
    };
    
  }
  componentWillMount() {
    console.log('will mount');
  }
  componentDidMount() {
    console.log('did mount');
    // fetch bookmark data from our API
    $.get('/api/links')
      .done(data => {
        console.log(data);
        this.setState( {bookmarks: data.links} );
      })
      .fail(err => console.log("Error fetching bookmark list", err))
  }
  componentWillUpdate() {
    console.log('will update');
  }
  addBookmark(newBookmark) {
    console.log('CAN NOW ADD BOOKMARK', newBookmark);
    $.post('/api/links', newBookmark)
      .done(added => {
        console.log("Successfully added", added)
        this.setState( {bookmarks: this.state.bookmarks.concat(added)} )
      })
      .fail(err => console.log("Error adding bookmark", err))
  }
  render() {
    console.log('render');
    return (
      <div>
        <h1>Bookmarks</h1>
        <List bookmarks={this.state.bookmarks} />
        <Form addBookmark={this.addBookmark.bind(this)} />
      </div>
    );
  }
}

export default AppController;
