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
  likeBookmark() {
    console.log('likeBookmark', this.props.bookmark.id);
    LinkActions.toggleLike(this.props.bookmark.id);
  }
  render() {
    let {title, url, safe, likedBy} = this.props.bookmark;
    return <tr className="bookmark">
      <td>
        <a href={url}
           target="_blank"
           style={{color: (safe ? 'green' : 'blue')}}>
        {title}
        </a>
      </td>
      <td>
        <button className="fa fa-heart"
                style={{color: (likedBy.me ? 'red' : null)}}
                onClick={this.likeBookmark.bind(this)}>
        </button>
      </td>
      <td>
        <button className="fa fa-trash"
                style={{color: 'grey'}}
                onClick={this.deleteBookmark.bind(this)}>
        </button>
      </td>
    </tr>;
  }
}

export default Link;
