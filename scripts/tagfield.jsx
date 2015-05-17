import React from 'react';
import BaseComponent from './components/BaseComponent';
import AsTagField from './components/AsTagField/index';


class AsForm extends BaseComponent {
  constructor() {
    super();
    this.state = {};
  }
  handleSubmit = () => {
    alert(this.state.tags.join(','));
  }
  handleTagChange = (tags) => {
    this.setState({
      tags: tags
    });
    console.log(tags.join(', '));
  }
  render = () => {
    return (
      <div>
        <div>
          <AsTagField ref="tags" onChange={this.handleTagChange} initTags={['JavaScript', 'CSS', 'HTML']}></AsTagField>
        </div>
        <div>
          <button className="submit" onClick={this.handleSubmit}>Get value</button>  
        </div>
      </div>
    );
  }
}

React.render(
  <AsForm/>,
  document.getElementById('form')
);
