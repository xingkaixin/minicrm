var React = require('react');
var mui = require('material-ui');

var NewSMS = require('./NewSMS');
var SMSList = require('./SMSList');

var {AppBar} = mui;

module.exports = React.createClass({
	getInitialState:function(){
		return {
			sms:[]
		}
	},
	onNewSMS:function( newSMS) {
		newSMS.key = this.state.sms.length + 1;
		var newSMS = this.state.sms.concat( newSMS );
		this.setState({
			sms:newSMS
		})
	},
	render:function(){
		
		return (
			<div>
				<AppBar 
					title='SMS' 
					showMenuIconButton={false} 
					style={{backgroundColor: '#383838'}}/>
				<div>
					<NewSMS onNewSMS={this.onNewSMS}/>
					<SMSList sms={this.state.sms} />
				</div>
			</div>

		)
	}
})