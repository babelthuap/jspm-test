import React from 'react';

console.log('in Link');

class Link extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Link';
  }
  render() {
    let {title, url, safe} = this.props.link;
    return <div className="link">
      <a href={url}
         target="_blank"
         style={{color: (safe ? 'green' : 'blue')}}>
      {title}
      </a>
    </div>;
  }
}

export default Link;
