import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Form';
  }
  handleSubmit(e) {
    e.preventDefault();
    
    let newBookmark = {
      title: this.refs.title.value,
      url: this.refs.url.value,
      id: Date.now()
    }
    
    this.props.addBookmark(newBookmark);
  }
  render() {
    return <div className="form">
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" placeholder="Title" ref="title" />
        <input type="url" placeholder="Url" ref="url" />
        <button type="submit">Add Link</button>
      </form>
    </div>;
  }
}

export default Form;
