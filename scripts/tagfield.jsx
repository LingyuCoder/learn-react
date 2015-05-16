import React from 'react';
import BaseComponent from './components/BaseComponent';
import AsTagField from './components/AsTagField/index';


class AsForm extends BaseComponent {
  constructor() {
    super();
    this._bind('handleSubmit', 'render');
  }
  handleSubmit() {
    alert(this.refs.tags.getTags().join(','));
  }
  render() {
    return (
      <div>
        <div>
          <AsTagField ref="tags" initTags={['JavaScript', 'CSS', 'HTML']}></AsTagField>
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
