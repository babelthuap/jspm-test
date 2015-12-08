import React from "react";
import LinkActions from "../actions/LinkActions";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = "Form";
    this.state = {title: '', url: ''};
  }
  handleSubmit(e) {
    e.preventDefault();
    
    let newBookmark = {
      title: this.state.title,
      url: this.state.url
    }
    
    LinkActions.saveNewBookmark(newBookmark);
    this.setState({title: '', url: ''});
  }
  changeTitle(e) { this.setState({ title: e.target.value }) }
  changeUrl(e) { this.setState({ url: e.target.value }) }
  render() {
    return <div className="form">
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" placeholder="Title" value={this.state.title}
               onChange={this.changeTitle.bind(this)} />
        <input type="url" placeholder="Url" value={this.state.url}
               onChange={this.changeUrl.bind(this)} />
        <button type="submit">Add Link</button>
      </form>
    </div>;
  }
}

export default Form;
