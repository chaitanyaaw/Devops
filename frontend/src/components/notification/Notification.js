import React, { Component } from 'react';
import NotificationAPI from './NotificationAPI';


const notificationAPI = new NotificationAPI();

class Notification extends Component {

	submitHandler = event => {
		event.preventDefault();
		this.handleSubmit();
	}

	handleSubmit(){
		notificationAPI.sendMail({
			"subject": this.refs.subject.value,
			"message": this.refs.message.value
		}).then((result)=>{
			alert("Success");
		}).catch(()=>{
			alert('There was an error! Please re-check your code.');
		});
	}

	render() {
		return (
			<div className="container">
				<div className="notification">
					<h1>Notification</h1>
					<hr />
					<form onSubmit={this.submitHandler}>
						<div className="form-group">
							<label for="exampleFormControlInput1">Subject</label>
							<input type="text" ref="subject" name="subject" className="form-control" id="exampleFormControlInput1" />
						</div>
						<div className="form-group">
							<label for="exampleFormControlTextarea1">Message</label>
							<textarea
								className="form-control"
								name="message"
								ref="message"
								id="exampleFormControlTextarea1"
								rows="3"
							></textarea>
						</div>
						<div className="form-group">
							<button type="submit" className="btn btn-primary">
								Send
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default Notification;
