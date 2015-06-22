var React = require('react');
var mui = require('material-ui');

var EmailItem = require('./EmailItem');

var AMUIReact = require('amazeui-react');
var {Grid,Col} = AMUIReact;

module.exports = React.createClass({
	render:function(){
		var email = this.props.email;
		var emailComps = email.map(function(item){
			return <EmailItem 
						key={item.key}
						email={item}
					/>

		}.bind(this));
		
		return (
			<div style={{marginLeft:'20px',marginTop:'20px'}}>
				<Grid className="doc-g" collapse>
					{emailComps}
				</Grid>
			</div>

		)
	}


})