import React from 'react';
import LinkActions from "../actions/LinkActions";

class Link extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Link';
  }
  deleteBookmark() {
    console.log('deleteBookmark', this.props.bookmark.id);
    LinkActions.deleteBookmark(this.props.bookmark.id);
  }
  render() {
    let {title, url, safe} = this.props.bookmark;
    return <div className="bookmark">
      <a href={url}
         target="_blank"
         style={{color: (safe ? 'green' : 'blue')}}>
      {title}
      </a>
      &nbsp;
      <button className="fa fa-trash"
              onClick={this.deleteBookmark.bind(this)}>
      </button>
    </div>;
  }
}

export default Link;
