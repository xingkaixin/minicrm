var React = require('react');
var Router = require('react-router');
var mui = require('material-ui');
var Menu = mui.Menu;



module.exports = React.createClass({
	render:function(){
		return (
			<div>
				<Menu 
					ref="menuItems"
					zDepth={0}
					memuItems={this.props.menuItems}
				/>
			</div>
		)
	}

	
})