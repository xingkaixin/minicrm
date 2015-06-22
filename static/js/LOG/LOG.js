var React = require('react');

var LogCheck = require('./LogCheck');
var LogList = require('./LogList');

var mui = require('material-ui');

var {AppBar} = mui;

module.exports = React.createClass({
	getInitialState:function(){
		return {
			log:[],
			flag:false
		}
	},
	onCheckLog:function(){
		this.setState({
			flag:true
		})
		$.ajax({
      		url      : '/tasks/check',
      		dataType : 'json',
      		type     : 'get',
      		contentType: "application/json",
      		success: function(resp) {
      			console.log('succ');
      			this.setState({
      				log:resp.tasks,
      				flag:false
      		 	});
      		}.bind(this),
      		error: function(xhr, status, err) {
      			this.setState({
      				flag:false
      			});
      			console.error(status, err.toString);
      		}.bind(this)
    	});
	},
	onListLog:function(){
		$.ajax({
      		url      : '/tasks',
      		dataType : 'json',
      		type     : 'get',
      		contentType: "application/json",
      		success: function(resp) {
      			console.log('list_succ');
      		  	this.setState({
      		  		log:resp.tasks
      		  	});
      		}.bind(this),
      		error: function(xhr, status, err) {
      		  console.error(status, err.toString);
      		}.bind(this)
    	});
	},
	componentDidMount:function() {
		this.onListLog();
	},
	render:function(){
		return (
			<div>
				<AppBar 
					title='Log' 
					showMenuIconButton={false} 
					style={{backgroundColor: '#383838'}}/>
				<div>
					<LogCheck onCheckLog={this.onCheckLog} flag={this.state.flag}/>
					<LogList tasks={this.state.log}/>
				</div>
			</div>

		)
	}
})