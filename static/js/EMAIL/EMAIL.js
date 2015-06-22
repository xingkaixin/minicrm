var React = require('react');
var mui = require('material-ui');

var NewEmail = require('./NewEmail');
var EmailList = require('./EmailList');
var EmailApp = require('./EmailApp');
var {AppBar} = mui;


var AMUIReact = require('amazeui-react');
var {Grid, Col} = AMUIReact;

module.exports = React.createClass({
	getInitialState:function(){
		return {
			email:[],
			flag:true
		}
	},
	onNewEmail:function( newEmail) {
		newEmail.key = this.state.email.length + 1;
		var newEmail = this.state.email.concat( newEmail );
		this.setState({
			email:newEmail,
			flag:false
		})
	},
	onClearEmail:function(){
		this.setState({
			email:[],
			flag:true
		})
	},
	onSentAllEmail:function(){
		console.log(this.state.email.length,this.state.email);
		$.ajax({
      		url      : '/email',
      		dataType : 'json',
      		type     : 'post',
      		contentType: "application/json",
      		data:JSON.stringify({
      		          'email':this.state.email
      		        }),
      		success: function(resp) {
      		  console.log('succ');
      		}.bind(this),
		
      		error: function(xhr, status, err) {
      		  console.error(status, err.toString);
      		}.bind(this)
    	});
	},
	render:function(){
		
		return (
			<div>
				<AppBar 
					title='Email' 
					showMenuIconButton={false} 
					style={{backgroundColor: '#383838'}}/>
				<div>
					<NewEmail onNewEmail={this.onNewEmail}/>
					<Grid className="doc-g">
					<Col lgOffset={9} mdOffset={6}>
					<EmailApp 
							flag={this.state.flag} 
							onClearEmail={this.onClearEmail}
							onSentAllEmail={this.onSentAllEmail}
					/>
					</Col></Grid>
					<EmailList email={this.state.email} />
				</div>
			</div>

		)
	}
})