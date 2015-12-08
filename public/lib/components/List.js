import React from 'react';
import Link from './Link';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'List';
  }
  render() {
    let content = this.props.bookmarks.map(bookmark => {
      return <Link key={bookmark.id} bookmark={bookmark} />
    });
    return <ul className="list">{content}</ul>;
  }
}

export default List;
