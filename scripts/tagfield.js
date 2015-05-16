import React from 'react';
import AsTagField from './components/AsTagField/index'

var AsForm = React.createClass({
  handleSubmit: function(){
    alert(this.refs.tags.getTags().join(','));
  },
  render: function(){
    return (
      <div>
        <div>
          <AsTagField ref="tags" initTags={['JavaScript', 'CSS']}></AsTagField>
        </div>
        <div>
          <button className="submit" onClick={this.handleSubmit}>Get Value</button>  
        </div>
      </div>
    );
  }
});

React.render(
  <AsForm/>,
  document.getElementById('form')
);
