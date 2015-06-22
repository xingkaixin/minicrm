var React = require('react');
var mui = require('material-ui');

var {AppBar} = mui;

module.exports = React.createClass({
	render:function(){
		
		return (
			<div>
				<AppBar 
					title='Log' 
					showMenuIconButton={false} 
					style={{backgroundColor: '#383838'}}/>
			</div>

		)
	}
})