import React from 'react';
import List from './List';
import Form from './Form';

import API from '../API';
import LinkActions from '../actions/LinkActions';

import LinkStore from '../stores/LinkStore';
// we'll read from the LinkStore at some point
// read LinkStore.getAll()

let _getAppState = () => {
  return { bookmarks: LinkStore.getAll() };
}

class AppController extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'AppController';

    this.state = _getAppState();
    this._onChange = this._onChange.bind(this);
  }
  componentDidMount() {
    LinkActions.getAllBookmarks();
    LinkStore.startListening(this._onChange);
  }
  componentWillUnmount() {
    LinkStore.stopListening(this._onChange);
  }
  addBookmark(newBookmark) {
    LinkActions.saveNewBookmark(newBookmark);
  }
  _onChange() {
    console.log("5. the store has emitted a change event");
    this.setState(_getAppState());
  }
  render() {
    return (
      <div>
        <h1>Modular Bookmarks</h1>
        <List bookmarks={this.state.bookmarks} />
        <Form addBookmark={this.addBookmark.bind(this)} />
      </div>
    );
  }
}

export default AppController;
