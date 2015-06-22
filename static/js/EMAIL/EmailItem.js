var React = require('react');
var mui = require('material-ui');
var {Paper} = mui;

var AMUIReact = require('amazeui-react');
var {Grid,Col} = AMUIReact;

module.exports = React.createClass({
	render:function(){
		
		var styleObj = {marginBottom:"5px",paddingLeft:'10px'};
		if( this.props.email.key%2==0){
			styleObj={backgroundColor:'#E8E8E8',marginBottom:"5px",paddingLeft:'10px'};
		}

		return (
			<Paper zDepth={3}>
			<Col sm={12} md={3} lg={2} end
				style={styleObj}>
				<p>{this.props.email.name}</p>
				<p>{this.props.email.mail}</p>
			</Col>
			</Paper>

		)
	}


})