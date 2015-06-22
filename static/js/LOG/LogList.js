var React = require('react');
var mui = require('material-ui');
var {Paper} = mui;
var LogItem = require('./LogItem');

var AMUIReact = require('amazeui-react');
var {Grid,Col} = AMUIReact;

module.exports = React.createClass({
	render:function(){
		var tasks = this.props.tasks;
		var taskComps = tasks.map(function(item){
			return <LogItem 
						key={item.key}
						task={item}
					/>

		}.bind(this));
		
		return (
			<div style={{marginLeft:'20px',marginTop:'20px','marginBottom':'10px'}}>
				<Grid className="doc-g" collapse>
					<Col sm={3} md={3} lg={3}>状态</Col>
					<Col sm={3} md={3} lg={3}>队列数</Col>
					<Col sm={3} md={3} lg={3}>失败数</Col>
					<Col sm={3} md={3} lg={3}>成功数</Col>
				</Grid>
					{taskComps}
			</div>

		)
	}


})