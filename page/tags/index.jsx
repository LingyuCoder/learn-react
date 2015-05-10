var AsTagField = React.createClass({
	getInitialState: function () {
    return {
        canDelete: false,
        tags: this.props.initTags || []
    };
	},
	getTags: function() {
		return this.state.tags;
	},
	setTags: function(tags){
		this.setState({
			tags: tags
		});
	},
	createTag: function(value) {
		var tags = this.state.tags;
		if(tags.indexOf(value) !== -1) return;
		tags.push(value);
		this.setState({
			tags: tags,
			highlight: false
		});
	},
	deleteTag: function() {
		var tags = this.state.tags;
		if(this.state.canDelete)
			this.setState({
				tags: tags.slice(0, -1),
				canDelete: false,
				highlight: false
			});
		else {
			this.setState({
				highlight: true,
				canDelete: true
			});
		}
	},
	componentDidMount: function () {
		var self = this;
		var $tags = self.getDOMNode();
		var $input = $tags.querySelector('.as-tags-input');
		var tags = self.state.tags;

		$input.addEventListener('keyup', function(e) {
			var key;
			key = e.keyCode || e.which;
			if (key === 13 || key === 188) {
				self.createTag($input.value.replace(',', ''));
        $input.value = '';
      } else if (key === 8){
        if ($input.value === '') self.deleteTag();
      } else {
        self.setState({
        	highlight: false,
        	canDelete: false
        });
      }
		}, true);
	},
  render: function () {
  	var tags = this.state.tags;
  	var highlight = this.state.highlight;
  	var $tags = tags.map(function(tag, index){
			return (highlight && index === tags.length - 1) ? <AsTag highlight>{tag}</AsTag> : <AsTag>{tag}</AsTag>;
  	});
    return (
    	<div className='as-tagfield'>
			  {$tags}
			  <input className='as-tags-input' placeholder='Add tag' type='text'/>
			</div>
    );
  }
});

var AsTag = React.createClass({
	render: function() {
		var className = 'as-tag' + (this.props.highlight ? ' as-tag-highlight':'');
		return (
			<div className={className}>
				{this.props.children}
			</div>
		);
	}
});