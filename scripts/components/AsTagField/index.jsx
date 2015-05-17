import React from 'react';
import AsTag from './AsTag';

require('./index.less');

export default class AsTagField extends React.Component {
	static propTypes = {
		initTags: React.PropTypes.arrayOf(React.PropTypes.string),
		onChange: React.PropTypes.func
	};
	static defaultProps = {
		initTags: [],
		onChange: () => {}
	};
  constructor(props) {
		super(props);
		this.state = {
			canDelete: false,
      tags: props.initTags
		};
	}
	render = () => {
		var tags = this.state.tags;
  	var highlight = this.state.highlight;
  	var $tags = tags.map((tag, index) => {
			return (highlight && index === tags.length - 1) ? <AsTag highlight>{tag}</AsTag> : <AsTag>{tag}</AsTag>;
  	});
    return (
    	<div className='as-tagfield'>
			  {$tags}
			  <input className='as-tags-input' placeholder='Add a new tag' type='text'/>
			</div>
    );
	}
	createTag = (value) => {
		if(!value.trim()) return;
		var tags = this.state.tags;
		if(tags.indexOf(value) !== -1) return;
		tags.push(value);
		this.setState({
			tags: tags,
			highlight: false
		});
		this.props.onChange(tags);
	}
	removeTag = () => {
		var tags = this.state.tags;
		if(this.state.canDelete) {
			tags = tags.slice(0, -1);
			this.setState({
				tags: tags,
				canDelete: false,
				highlight: false
			});
			this.props.onChange(tags);
		} else
			this.setState({
				highlight: true,
				canDelete: true
			});
	}
	componentDidMount = () => {
		var $tags = React.findDOMNode(this);
		var $input = $tags.querySelector('.as-tags-input');
		var tags = this.state.tags;

		$input.addEventListener('keyup', (e) => {
			var key;
			key = e.keyCode || e.which;
			if (key === 13 || key === 188) {
				this.createTag($input.value.replace(',', ''));
        $input.value = '';
      } else if (key === 8)
        $input.value === '' && this.removeTag();
      else
        this.setState({
        	highlight: false,
        	canDelete: false
        });
		}, true);

		this.props.onChange(tags);
	}
}