var React = require('react');
var mui = require('material-ui');

var SMSItem = require('./SMSItem');

var AMUIReact = require('amazeui-react');
var {Grid,Col} = AMUIReact;

module.exports = React.createClass({
	render:function(){
		var sms = this.props.sms;
		var smsComps = sms.map(function(item){
			return <SMSItem 
						key={item.key}
						sms={item}
					/>

		}.bind(this));
		
		return (
			<div style={{marginLeft:'20px',marginTop:'20px'}}>
				<Grid className="doc-g" collapse>
					{smsComps}
				</Grid>
			</div>

		)
	}


})