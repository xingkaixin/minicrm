var React = require('react');
var mui = require('material-ui');
var {Paper} = mui;

var AMUIReact = require('amazeui-react');
var {Grid,Col} = AMUIReact;

module.exports = React.createClass({
	render:function(){
		
		var styleObj = {marginBottom:"5px",paddingLeft:'10px'};
		if( this.props.sms.key%2==0){
			styleObj={backgroundColor:'#E8E8E8',marginBottom:"5px",paddingLeft:'10px'};
		}

		return (
			<Paper zDepth={3}>
			<Col sm={12} md={3} lg={2} end
				style={styleObj}>
				<p>{this.props.sms.name}</p>
				<p>{this.props.sms.mobile}</p>
			</Col>
			</Paper>

		)
	}


})