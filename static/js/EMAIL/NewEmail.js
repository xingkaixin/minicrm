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
  					ref="mail"
  					hintText="邮箱"
  					type='text'
  					floatingLabelText="输入邮箱"
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
		var mail = this.refs.mail.getValue().trim();
		if(name.length>0&&mail.length>0){
			var newEmail = {
				name:name,
				mail:mail
			};
			this.refs.name.setValue('');
			this.refs.mail.setValue('');
			this.props.onNewEmail( newEmail);
		}
		else{
			alert('什么都不填，当然什么都加不了了啊！');
		}
		
	}
})