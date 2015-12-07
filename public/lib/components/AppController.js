import React from 'react';
import List from './List';

class AppController extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'AppController';

    this.state = {
      bookmarks: []
    };
  }
  render() {
    return (
      <div>
        <h1>Bookmarks</h1>
        <List bookmarks={this.state.bookmarks} />
      </div>
    );
  }
}

export default AppController;
