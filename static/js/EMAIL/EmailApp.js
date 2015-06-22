var React = require('react');
var mui = require('material-ui');


var {RaisedButton} = mui;


module.exports = React.createClass({
	render:function(){
		return (
			<div style={{marginTop:'10px',marginLeft:'20px'}}>
				<RaisedButton 
  					label="全部发送" 
            		primary={true}
            		disabled={this.props.flag} 
            		onTouchTap={this._onHandleSentAll} 
            	/>
            	&nbsp;
            	<RaisedButton 
  					label="清空" 
            		secondary={true}
            		disabled={this.props.flag} 
            		onTouchTap={this._onHandleClear} 
            	/>
			</div>

		)
	},

	_onHandleClear:function(){
		this.props.onClearEmail();
	},

	_onHandleSentAll:function(){
		this.props.onSentAllEmail();
	}


})