var React = require('react');
var mui = require('material-ui');

var {TextField, RaisedButton} = mui;

module.exports = React.createClass({
	render:function(){
		
		return (
			<div style={{marginLeft:'20px'}}>
				<TextField
					ref="name"
  					hintText="姓名"
  					type='text'
  					floatingLabelText="输入姓名"
  				/>
  				<TextField
  					ref="mobile"
  					hintText="手机号"
  					type='text'
  					floatingLabelText="输入手机号"
  				/>

  				<br/>

  				<RaisedButton 
  					label="添加" 
            		secondary={true}
            		onTouchTap={this._onHandleNew} 
            	/>
			</div>

		)
	},

	_onHandleNew:function(){
		var name = this.refs.name.getValue().trim();
		var mobile = this.refs.mobile.getValue().trim();
		if(name.length>0&&mobile.length>0){
			var newSMS = {
				name:name,
				mobile:mobile
			};
			this.refs.name.setValue('');
			this.refs.mobile.setValue('');
			this.props.onNewSMS( newSMS);
		}
		else{
			alert('什么都不填，当然什么都加不了了啊！');
		}
		
	}
})