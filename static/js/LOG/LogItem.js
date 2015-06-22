var React = require('react');
var mui = require('material-ui');


var AMUIReact = require('amazeui-react');
var {Grid,Col} = AMUIReact;

module.exports = React.createClass({
	render:function(){
		var styleObj = {}
		if(this.props.task.status=="SUCCESS"){
			styleObj = {backgroundColor:'#2EB52F'}
		}else if(this.props.task.status=="FAILURE"){
			styleObj = {backgroundColor:'#F42C1C'}
		}else{
			styleObj = {backgroundColor:'#FAEE0B'}
		}
		return (
			<Grid className="doc-g" collapse style={styleObj}>
				<Col sm={3} md={3} lg={3}>
					{this.props.task.status}
				</Col>

				<Col sm={3} md={3} lg={3}>
					{this.props.task.req_num}
				</Col>

				<Col sm={3} md={3} lg={3}>
					{this.props.task.fail_num}
				</Col>

				<Col sm={3} md={3} lg={3}>
					{this.props.task.succ_num}
				</Col>

			</Grid>

		)
	}


})