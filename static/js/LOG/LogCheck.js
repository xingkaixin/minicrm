var React = require('react');
var mui = require('material-ui');


var {RaisedButton} = mui;


module.exports = React.createClass({
	render:function(){
		return (
			<div style={{marginTop:'10px',marginLeft:'20px'}}>
				<RaisedButton 
  					label="检查发送" 
            		primary={true}
            		disabled={this.props.flag} 
            		onTouchTap={this._onHandleCheck} 
            	/>
			</div>

		)
	},

	_onHandleCheck:function(){
		this.props.onCheckLog();
	}


})