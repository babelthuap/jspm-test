import React from 'react';
import Link from './Link';

console.log('in List');

class List extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'List';
  }
  render() {
    let content = this.props.bookmarks.map(bookmark => <Link key={bookmark.id} link={bookmark} />);
    return <div className="list">
      {content}
    </div>;
  }
}

export default List;
